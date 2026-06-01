import { View, Text } from 'react-native';
import { Divider } from '@/components/ui/divider';

export function ComponentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View className="mb-8">
      <Text className="mb-3 text-lg font-bold text-typography-900">
        {title}
      </Text>
      <Divider className="mb-4" />
      <View className="gap-4">{children}</View>
    </View>
  );
}
