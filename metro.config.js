const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const appNodeModules = path.resolve(__dirname, 'node_modules');
const localScreens = path.resolve(__dirname, 'packages/react-native-screens');
const localBottomTabs = path.resolve(
  __dirname,
  'packages/react-native-bottom-tabs/packages/react-native-bottom-tabs',
);

config.watchFolders = [...(config.watchFolders || []), localScreens, localBottomTabs];

// Block submodule node_modules so their own react/react-native copies are never used
config.resolver.blockList = [
  ...(Array.isArray(config.resolver.blockList) ? config.resolver.blockList : []),
  new RegExp(`${localScreens}/node_modules/.*`),
  new RegExp(`${path.resolve(__dirname, 'packages/react-native-bottom-tabs')}/node_modules/.*`),
];

// App's node_modules always takes priority
config.resolver.nodeModulesPaths = [appNodeModules];

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Redirect react-native-screens to local source
  if (moduleName === 'react-native-screens') {
    return context.resolveRequest(context, `${localScreens}/src/index`, platform);
  }

  // Redirect react-native-bottom-tabs to local source
  if (moduleName === 'react-native-bottom-tabs') {
    return context.resolveRequest(context, `${localBottomTabs}/src/index`, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './global.css' });
