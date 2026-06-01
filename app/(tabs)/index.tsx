import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-0">
      <Text className="text-xl font-bold text-typography-900">Home</Text>
      <Text className="mt-2 text-typography-500">Expo Stack App</Text>
    </View>
  );
}
