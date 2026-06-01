import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-0">
      <Text className="text-xl font-bold text-typography-900">Modal</Text>
      <Text className="mt-2 text-typography-500">Modal example coming soon</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
