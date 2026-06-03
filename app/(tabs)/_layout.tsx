import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'house', android: 'home', web: 'home' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="base"
        options={{
          title: 'Base',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'textformat', android: 'text_format', web: 'text_format' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="forms"
        options={{
          title: 'Forms',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'pencil.and.list.clipboard', android: 'edit_note', web: 'edit_note' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          title: 'Feedback',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'bell', android: 'notifications', web: 'notifications' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="overlays"
        options={{
          title: 'Overlays',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'square.on.square', android: 'layers', web: 'layers' }}
              tintColor={color}
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
}
