import { View, Text } from 'react-native';
import { usePathname } from 'expo-router';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';

export function TabPlaceholder({ title }: { title: string }) {
  const pathname = usePathname();
  return (
    <View className="flex-1 items-center justify-center bg-background-0 px-6">
      <VStack className="items-center gap-2">
        <Heading size="xl">{title}</Heading>
        <Text className="text-sm text-typography-400">{pathname}</Text>
      </VStack>
    </View>
  );
}
