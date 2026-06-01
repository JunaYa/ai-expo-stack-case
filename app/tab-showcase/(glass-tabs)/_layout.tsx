import { Platform, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { BlurView } from 'expo-blur';
import TabBarBackground from '@/components/ui/tab-bar-background';

type TabBarBgComponent = React.ComponentType | undefined;
const TabBarBg = TabBarBackground as TabBarBgComponent;

export default function GlassTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Platform.OS === 'ios' ? '#ffffff' : '#6366f1',
        tabBarInactiveTintColor: Platform.OS === 'ios' ? 'rgba(255,255,255,0.5)' : undefined,
        tabBarStyle: Platform.OS === 'ios'
          ? { position: 'absolute', borderTopWidth: 0, elevation: 0, backgroundColor: 'transparent' }
          : undefined,
        tabBarBackground: () => TabBarBg ? <TabBarBg /> : null,
        headerTransparent: Platform.OS === 'ios',
        headerBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              tint="systemChromeMaterial"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ) : null,
        headerStyle: Platform.OS === 'ios'
          ? { backgroundColor: 'transparent' }
          : undefined,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'house', android: 'home', web: 'home' }} tintColor={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }} tintColor={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'person', android: 'person', web: 'person' }} tintColor={color} size={22} />
          ),
        }}
      />
    </Tabs>
  );
}
