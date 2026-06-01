import { Stack } from 'expo-router';

export default function TabShowcaseLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Tab Layouts' }} />
      <Stack.Screen name="(two-tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(three-tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(four-tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(five-tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(center-fab)" options={{ headerShown: false }} />
      <Stack.Screen name="(split-center)" options={{ headerShown: false }} />
      <Stack.Screen name="(glass-tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
