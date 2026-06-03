import { Text as RNText, ScrollView, View } from 'react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';

const CATEGORIES = [
  { emoji: '🎨', label: 'Design', count: 12, color: 'bg-pink-500/20' },
  { emoji: '💻', label: 'Development', count: 24, color: 'bg-blue-500/20' },
  { emoji: '📊', label: 'Analytics', count: 8, color: 'bg-green-500/20' },
  { emoji: '🔒', label: 'Security', count: 5, color: 'bg-orange-500/20' },
  { emoji: '🧪', label: 'Testing', count: 16, color: 'bg-purple-500/20' },
  { emoji: '📱', label: 'Mobile', count: 9, color: 'bg-cyan-500/20' },
];

const RECENT = [
  'Tab navigation patterns',
  'Glass morphism UI',
  'Expo Router v4',
  'NativeWind setup',
];

export default function SearchScreen() {
  return (
    <ScrollView
      className="flex-1 bg-black"
      contentContainerClassName="px-4 pb-32 pt-4"
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-6 overflow-hidden rounded-2xl bg-white/10 p-4">
        <Input variant="outline" className="border-white/20 bg-white/5">
          <InputSlot className="pl-3">
            <InputIcon as={SearchIcon} className="text-white/40" />
          </InputSlot>
          <InputField
            placeholder="Search components..."
            placeholderTextColor="rgba(255,255,255,0.3)"
            className="text-white"
          />
        </Input>
      </View>

      <View className="mx-0 mb-6 overflow-hidden rounded-2xl bg-white/10 p-5">
        <Heading size="sm" className="mb-3 text-white/70">
          Categories
        </Heading>
        <VStack className="gap-2">
          {CATEGORIES.map((cat) => (
            <HStack key={cat.label} className={`items-center gap-3 rounded-xl ${cat.color} p-3`}>
              <RNText className="text-xl">{cat.emoji}</RNText>
              <RNText className="flex-1 text-sm font-medium text-white">{cat.label}</RNText>
              <RNText className="text-xs text-white/50">{cat.count} items</RNText>
            </HStack>
          ))}
        </VStack>
      </View>

      <View className="mx-0 mb-6 overflow-hidden rounded-2xl bg-white/10 p-5">
        <Heading size="sm" className="mb-3 text-white/70">
          Recent Searches
        </Heading>
        <VStack className="gap-2">
          {RECENT.map((item) => (
            <HStack key={item} className="items-center gap-2 py-1.5">
              <RNText className="text-white/30">🕑</RNText>
              <RNText className="text-sm text-white/60">{item}</RNText>
            </HStack>
          ))}
        </VStack>
      </View>
    </ScrollView>
  );
}
