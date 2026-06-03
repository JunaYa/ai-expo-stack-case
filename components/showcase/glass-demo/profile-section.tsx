import { Text as RNText, View } from 'react-native';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { useGlassDemo } from './context';

export function ProfileSection() {
  const { profile } = useGlassDemo();

  return (
    <View className="mx-4 mb-6 overflow-hidden rounded-2xl bg-white/10 p-5">
      <HStack className="items-center gap-4">
        <View className="rounded-full bg-white/20 p-1">
          <Avatar size="lg">
            <AvatarFallbackText>{profile.name}</AvatarFallbackText>
          </Avatar>
        </View>
        <VStack className="gap-0.5">
          <Heading size="lg" className="text-white">
            {profile.name}
          </Heading>
          <RNText className="text-sm text-white/60">{profile.username}</RNText>
        </VStack>
      </HStack>
      <Divider className="my-4 bg-white/10" />
      <HStack className="justify-around">
        <VStack className="items-center gap-1">
          <RNText className="text-2xl font-bold text-white">12</RNText>
          <RNText className="text-xs text-white/50">Projects</RNText>
        </VStack>
        <VStack className="items-center gap-1">
          <RNText className="text-2xl font-bold text-white">48</RNText>
          <RNText className="text-xs text-white/50">Tasks</RNText>
        </VStack>
        <VStack className="items-center gap-1">
          <RNText className="text-2xl font-bold text-white">96%</RNText>
          <RNText className="text-xs text-white/50">On Time</RNText>
        </VStack>
      </HStack>
    </View>
  );
}
