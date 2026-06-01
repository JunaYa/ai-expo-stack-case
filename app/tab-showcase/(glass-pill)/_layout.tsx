import { Tabs } from 'expo-router';
import { GlassPillTabBar } from '@/components/showcase/glass-pill-tab-bar';

export const unstable_settings = {
  initialRouteName: 'article',
};

export default function GlassPillLayout() {
  return (
    <Tabs
      initialRouteName="article"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <GlassPillTabBar {...props} />}
    >
      <Tabs.Screen name="article" options={{ title: 'Article' }} />
      <Tabs.Screen name="contacts" options={{ title: 'Contacts' }} />
      <Tabs.Screen name="albums" options={{ title: 'Albums' }} />
    </Tabs>
  );
}
