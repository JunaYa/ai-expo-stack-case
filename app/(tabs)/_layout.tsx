import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="base" options={{ title: 'Base' }} />
      <Stack.Screen name="forms" options={{ title: 'Forms' }} />
      <Stack.Screen name="feedback" options={{ title: 'Feedback' }} />
      <Stack.Screen name="overlays" options={{ title: 'Overlays' }} />
    </Stack>
  );
}
