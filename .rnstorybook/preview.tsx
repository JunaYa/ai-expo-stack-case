import type { Preview } from '@storybook/react-native';
import { useColorScheme } from 'nativewind';
import { View } from 'react-native';

import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';
import '../global.css';

const preview: Preview = {
  decorators: [
    Story => {
      const { colorScheme } = useColorScheme();
      return (
        <GluestackUIProvider mode={colorScheme === 'dark' ? 'dark' : 'light'}>
          <View style={{ flex: 1, padding: 16 }}>
            <Story />
          </View>
        </GluestackUIProvider>
      );
    },
  ],
};

export default preview;
