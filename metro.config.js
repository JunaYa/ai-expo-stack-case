const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const appRoot = __dirname;
const appNodeModules = path.resolve(appRoot, 'node_modules');
const localScreens = path.resolve(appRoot, 'packages/react-native-screens');
const localBottomTabs = path.resolve(
  appRoot,
  'packages/react-native-bottom-tabs/packages/react-native-bottom-tabs',
);

config.watchFolders = [...(config.watchFolders || []), localScreens, localBottomTabs];

// App's node_modules always takes priority
config.resolver.nodeModulesPaths = [appNodeModules];

const prevResolveRequest = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const origin = context.originModulePath || '';
  const isFromSubmodule = origin.startsWith(localScreens) || origin.startsWith(localBottomTabs);

  // When resolving FROM submodule source, force shared deps to the app's copies
  if (isFromSubmodule) {
    if (
      moduleName === 'react' ||
      moduleName === 'react-native' ||
      moduleName.startsWith('react/') ||
      moduleName.startsWith('react-native/')
    ) {
      return context.resolveRequest(
        { ...context, nodeModulesPaths: [appNodeModules] },
        moduleName,
        platform,
      );
    }
  }

  // Redirect package imports to local source
  if (moduleName === 'react-native-screens') {
    return context.resolveRequest(context, `${localScreens}/src/index`, platform);
  }
  if (moduleName === 'react-native-bottom-tabs') {
    return context.resolveRequest(context, `${localBottomTabs}/src/index`, platform);
  }

  if (prevResolveRequest) {
    return prevResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './global.css' });
