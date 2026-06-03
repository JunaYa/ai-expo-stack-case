import { Pressable, Text as RNText, View } from 'react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Switch } from '@/components/ui/switch';
import { VStack } from '@/components/ui/vstack';
import { useGlassDemo } from './context';

const PRIORITY_COLORS: Record<string, string> = {
  high: 'text-red-400',
  medium: 'text-orange-400',
  low: 'text-green-400',
};

export function TaskSection() {
  const { tasks, toggleTask, taskFilter, setTaskFilter } = useGlassDemo();

  const filteredTasks = tasks.filter((t) => {
    if (taskFilter === 'pending') return !t.completed;
    if (taskFilter === 'completed') return t.completed;
    return true;
  });

  const filters = ['all', 'pending', 'completed'] as const;

  return (
    <View className="mx-4 mb-6 overflow-hidden rounded-2xl bg-white/10 p-5">
      <Heading size="md" className="mb-4 text-white">
        Tasks
      </Heading>

      <HStack className="mb-4 gap-2">
        {filters.map((f) => (
          <Pressable
            key={f}
            onPress={() => setTaskFilter(f)}
            className={`flex-1 items-center rounded-lg py-2 ${taskFilter === f ? 'bg-white/20' : 'bg-white/5'}`}
          >
            <RNText
              className={`text-xs font-medium capitalize ${taskFilter === f ? 'text-white' : 'text-white/50'}`}
            >
              {f}
            </RNText>
          </Pressable>
        ))}
      </HStack>

      {filteredTasks.length === 0 ? (
        <View className="items-center py-8">
          <RNText className="text-3xl">✅</RNText>
          <RNText className="mt-2 text-sm text-white/50">No {taskFilter} tasks</RNText>
        </View>
      ) : (
        <VStack className="gap-3">
          {filteredTasks.map((task) => (
            <HStack key={task.id} className="items-center gap-3 rounded-xl bg-white/5 p-3">
              <RNText className="text-2xl">{task.emoji}</RNText>
              <VStack className="flex-1 gap-0.5">
                <HStack className="items-center gap-2">
                  <RNText
                    className={`text-sm font-medium ${task.completed ? 'text-white/40 line-through' : 'text-white'}`}
                  >
                    {task.title}
                  </RNText>
                  <RNText
                    className={`text-[10px] font-semibold uppercase ${PRIORITY_COLORS[task.priority]}`}
                  >
                    {task.priority}
                  </RNText>
                </HStack>
                <RNText className="text-xs text-white/40">{task.description}</RNText>
              </VStack>
              <Switch value={task.completed} onToggle={() => toggleTask(task.id)} />
            </HStack>
          ))}
        </VStack>
      )}
    </View>
  );
}
