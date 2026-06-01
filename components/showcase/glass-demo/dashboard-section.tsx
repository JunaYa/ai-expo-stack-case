import { View, Text as RNText } from 'react-native';
import { useGlassDemo } from './context';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@/components/ui/slider';
import { Heading } from '@/components/ui/heading';

function CircularGauge({ value, color, label, size = 80 }: { value: number; color: string; label: string; size?: number }) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (1 - value);

  return (
    <View style={{ width: size, height: size }} className="items-center justify-center">
      <View className="absolute">
        <View style={{ width: size, height: size }}>
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: strokeWidth,
              borderColor: 'rgba(255,255,255,0.1)',
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: strokeWidth,
              borderColor: color,
              borderLeftColor: 'transparent',
              borderBottomColor: value > 0.5 ? color : 'transparent',
              transform: [{ rotate: '-45deg' }],
              opacity: value > 0 ? 1 : 0,
            }}
          />
        </View>
      </View>
      <VStack className="items-center">
        <RNText className="text-lg font-bold text-white">{Math.round(value * 100)}%</RNText>
        <RNText className="text-[10px] text-white/50">{label}</RNText>
      </VStack>
    </View>
  );
}

export function DashboardSection() {
  const { tasks, productivityScore, focusLevel, setProductivityScore, setFocusLevel } = useGlassDemo();

  const completedCount = tasks.filter((t) => t.completed).length;
  const completionRate = tasks.length > 0 ? completedCount / tasks.length : 0;
  const highPriority = tasks.filter((t) => t.priority === 'high' && !t.completed).length;

  return (
    <View className="mx-4 mb-6 overflow-hidden rounded-2xl bg-white/10 p-5">
      <Heading size="md" className="mb-4 text-white">Dashboard</Heading>

      <HStack className="mb-6 justify-around">
        <CircularGauge value={completionRate} color="#22c55e" label="Done" />
        <CircularGauge value={productivityScore} color="#6366f1" label="Productivity" />
        <CircularGauge value={focusLevel} color="#a855f7" label="Focus" />
      </HStack>

      <HStack className="mb-6 gap-3">
        <View className="flex-1 items-center rounded-xl bg-white/10 p-3">
          <RNText className="text-2xl font-bold text-white">{completedCount}/{tasks.length}</RNText>
          <RNText className="text-xs text-white/50">Completed</RNText>
        </View>
        <View className="flex-1 items-center rounded-xl bg-white/10 p-3">
          <RNText className="text-2xl font-bold text-red-400">{highPriority}</RNText>
          <RNText className="text-xs text-white/50">Urgent</RNText>
        </View>
      </HStack>

      <VStack className="gap-4">
        <VStack className="gap-2">
          <HStack className="items-center justify-between">
            <RNText className="text-sm text-white/70">Productivity</RNText>
            <RNText className="text-sm font-medium text-indigo-400">
              {Math.round(productivityScore * 100)}%
            </RNText>
          </HStack>
          <Slider
            value={Math.round(productivityScore * 100)}
            minValue={0}
            maxValue={100}
            onChange={(v) => setProductivityScore(v / 100)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>

        <VStack className="gap-2">
          <HStack className="items-center justify-between">
            <RNText className="text-sm text-white/70">Focus Level</RNText>
            <RNText className="text-sm font-medium text-purple-400">
              {Math.round(focusLevel * 100)}%
            </RNText>
          </HStack>
          <Slider
            value={Math.round(focusLevel * 100)}
            minValue={0}
            maxValue={100}
            onChange={(v) => setFocusLevel(v / 100)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
      </VStack>
    </View>
  );
}
