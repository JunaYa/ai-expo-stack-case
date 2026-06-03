import { Text as RNText, ScrollView, View } from 'react-native';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { BellIcon, Icon, MailIcon, SettingsIcon, StarIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';

const MENU_ITEMS = [
  { icon: BellIcon, label: 'Notifications', detail: '3 new', color: 'text-red-400' },
  { icon: StarIcon, label: 'Favorites', detail: '12 saved', color: 'text-yellow-400' },
  { icon: MailIcon, label: 'Messages', detail: '5 unread', color: 'text-blue-400' },
  { icon: SettingsIcon, label: 'Settings', detail: '', color: 'text-white/50' },
];

const STATS = [
  { value: '156', label: 'Components' },
  { value: '42', label: 'Projects' },
  { value: '3.2k', label: 'Stars' },
];

export default function ProfileScreen() {
  return (
    <ScrollView
      className="flex-1 bg-black"
      contentContainerClassName="px-4 pb-32 pt-4"
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-6 items-center overflow-hidden rounded-2xl bg-white/10 p-6">
        <View className="mb-3 rounded-full bg-white/20 p-1.5">
          <Avatar size="xl">
            <AvatarFallbackText>AR</AvatarFallbackText>
          </Avatar>
        </View>
        <Heading size="xl" className="text-white">
          Arjun
        </Heading>
        <RNText className="mt-1 text-sm text-white/50">@arjun</RNText>

        <HStack className="mt-5 w-full justify-around">
          {STATS.map((stat) => (
            <VStack key={stat.label} className="items-center gap-0.5">
              <RNText className="text-xl font-bold text-white">{stat.value}</RNText>
              <RNText className="text-xs text-white/40">{stat.label}</RNText>
            </VStack>
          ))}
        </HStack>
      </View>

      <View className="mx-0 mb-6 overflow-hidden rounded-2xl bg-white/10 p-4">
        <VStack>
          {MENU_ITEMS.map((item, i) => (
            <View key={item.label}>
              {i > 0 && <Divider className="bg-white/10" />}
              <HStack className="items-center gap-3 py-3">
                <Icon as={item.icon} size="lg" className={item.color} />
                <RNText className="flex-1 text-sm font-medium text-white">{item.label}</RNText>
                {item.detail ? (
                  <RNText className="text-xs text-white/40">{item.detail}</RNText>
                ) : null}
                <RNText className="text-white/20">›</RNText>
              </HStack>
            </View>
          ))}
        </VStack>
      </View>
    </ScrollView>
  );
}
