const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const localScreens = path.resolve(__dirname, 'packages/react-native-screens');
const localBottomTabs = path.resolve(
  __dirname,
  'packages/react-native-bottom-tabs/packages/react-native-bottom-tabs',
);

// Watch the submodule source directories
config.watchFolders = [...(config.watchFolders || []), localScreens, localBottomTabs];

// Resolve source field so Metro uses src/ instead of lib/
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'react-native-screens' || moduleName.startsWith('react-native-screens/')) {
    const subPath = moduleName.replace('react-native-screens', '');
    return context.resolveRequest(
      context,
      path.join(localScreens, 'src', subPath || 'index'),
      platform,
    );
  }

  if (
    moduleName === 'react-native-bottom-tabs' ||
    moduleName.startsWith('react-native-bottom-tabs/')
  ) {
    const subPath = moduleName.replace('react-native-bottom-tabs', '');
    return context.resolveRequest(
      context,
      path.join(localBottomTabs, 'src', subPath || 'index'),
      platform,
    );
  }

  return context.resolveRequest(context, moduleName, platform);
};

// Ensure submodule deps resolve from the app's node_modules
config.resolver.nodeModulesPaths = [
  ...(config.resolver.nodeModulesPaths || []),
  path.resolve(__dirname, 'node_modules'),
];

module.exports = withNativeWind(config, { input: './global.css' });
