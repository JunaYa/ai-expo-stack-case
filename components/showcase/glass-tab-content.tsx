import { ScrollView, View, Text, Image } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';

const COLORS = [
  'bg-primary-500', 'bg-secondary-500', 'bg-error-500',
  'bg-success-500', 'bg-warning-500', 'bg-info-500',
  'bg-primary-300', 'bg-error-300', 'bg-success-300',
  'bg-warning-300', 'bg-info-300', 'bg-secondary-300',
];

export function GlassTabContent({ title }: { title: string }) {
  return (
    <ScrollView
      className="flex-1 bg-black"
      contentContainerClassName="pb-32 pt-28 px-4"
      showsVerticalScrollIndicator={false}
    >
      <Text className="mb-4 text-3xl font-bold text-white">{title}</Text>
      <Text className="mb-6 text-base text-white/60">
        Scroll to see the glass blur effect on the tab bar and header
      </Text>

      <VStack className="gap-3">
        {COLORS.map((color, i) => (
          <View key={i} className={`${color} h-28 w-full items-center justify-center rounded-2xl`}>
            <Text className="text-lg font-semibold text-white">Card {i + 1}</Text>
          </View>
        ))}
      </VStack>

      <View className="mt-6 h-64 w-full overflow-hidden rounded-2xl">
        <Image
          source={{ uri: 'https://picsum.photos/400/300' }}
          className="h-full w-full"
          resizeMode="cover"
        />
      </View>

      <VStack className="mt-6 gap-3">
        {['bg-primary-700', 'bg-error-700', 'bg-success-700', 'bg-warning-700'].map((color, i) => (
          <View key={i} className={`${color} h-28 w-full items-center justify-center rounded-2xl`}>
            <Text className="text-lg font-semibold text-white">More {i + 1}</Text>
          </View>
        ))}
      </VStack>
    </ScrollView>
  );
}
