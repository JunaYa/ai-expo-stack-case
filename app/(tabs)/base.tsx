import { Text as RNText, ScrollView, View } from 'react-native';
import { ComponentSection } from '@/components/showcase/component-section';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import {
  BellIcon,
  Icon,
  MoonIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
} from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

function TypographySection() {
  return (
    <ComponentSection title="Typography">
      <VStack className="gap-2">
        <Heading size="3xl">Heading 3XL</Heading>
        <Heading size="2xl">Heading 2XL</Heading>
        <Heading size="xl">Heading XL</Heading>
        <Heading size="lg">Heading LG</Heading>
        <Heading size="md">Heading MD</Heading>
        <Heading size="sm">Heading SM</Heading>
      </VStack>

      <VStack className="gap-1">
        <Text size="lg">Text Large</Text>
        <Text size="md">Text Medium</Text>
        <Text size="sm">Text Small</Text>
        <Text size="xs">Text Extra Small</Text>
      </VStack>

      <HStack className="flex-wrap gap-2">
        <Badge action="info">
          <BadgeText>Info</BadgeText>
        </Badge>
        <Badge action="success">
          <BadgeText>Success</BadgeText>
        </Badge>
        <Badge action="warning">
          <BadgeText>Warning</BadgeText>
        </Badge>
        <Badge action="error">
          <BadgeText>Error</BadgeText>
        </Badge>
        <Badge variant="outline">
          <BadgeText>Outline</BadgeText>
        </Badge>
      </HStack>
    </ComponentSection>
  );
}

function CardsLayoutSection() {
  return (
    <ComponentSection title="Cards & Layout">
      <Card size="md" variant="elevated">
        <VStack className="gap-2">
          <Heading size="md">Elevated Card</Heading>
          <Text size="sm">This is a card with elevated variant and shadow.</Text>
        </VStack>
      </Card>

      <Card size="md" variant="outline">
        <VStack className="gap-2">
          <Heading size="md">Outline Card</Heading>
          <Text size="sm">This is a card with outline variant and border.</Text>
        </VStack>
      </Card>

      <Card size="md" variant="filled">
        <VStack className="gap-2">
          <Heading size="md">Filled Card</Heading>
          <Text size="sm">This is a card with filled variant and background.</Text>
        </VStack>
      </Card>

      <RNText className="text-sm font-medium text-typography-600">HStack / VStack</RNText>
      <HStack className="gap-2">
        <View className="h-12 flex-1 items-center justify-center rounded-md bg-primary-100">
          <RNText className="text-xs text-primary-700">1</RNText>
        </View>
        <View className="h-12 flex-1 items-center justify-center rounded-md bg-primary-100">
          <RNText className="text-xs text-primary-700">2</RNText>
        </View>
        <View className="h-12 flex-1 items-center justify-center rounded-md bg-primary-100">
          <RNText className="text-xs text-primary-700">3</RNText>
        </View>
      </HStack>

      <RNText className="text-sm font-medium text-typography-600">Divider</RNText>
      <VStack className="gap-2">
        <RNText className="text-sm text-typography-700">Above</RNText>
        <Divider />
        <RNText className="text-sm text-typography-700">Below</RNText>
      </VStack>
    </ComponentSection>
  );
}

function MediaSection() {
  return (
    <ComponentSection title="Media">
      <RNText className="text-sm font-medium text-typography-600">Avatar</RNText>
      <HStack className="gap-3">
        <Avatar size="sm">
          <AvatarFallbackText>AB</AvatarFallbackText>
        </Avatar>
        <Avatar size="md">
          <AvatarFallbackText>CD</AvatarFallbackText>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallbackText>EF</AvatarFallbackText>
        </Avatar>
        <Avatar size="xl">
          <AvatarFallbackText>GH</AvatarFallbackText>
        </Avatar>
      </HStack>

      <RNText className="text-sm font-medium text-typography-600">Icons</RNText>
      <HStack className="flex-wrap gap-3">
        <Icon as={SunIcon} size="lg" className="text-warning-500" />
        <Icon as={MoonIcon} size="lg" className="text-primary-500" />
        <Icon as={StarIcon} size="lg" className="text-warning-400" />
        <Icon as={BellIcon} size="lg" className="text-info-500" />
        <Icon as={SettingsIcon} size="lg" className="text-typography-500" />
        <Icon as={SearchIcon} size="lg" className="text-typography-500" />
      </HStack>

      <RNText className="text-sm font-medium text-typography-600">Image</RNText>
      <Image
        source={{ uri: 'https://picsum.photos/300/200' }}
        alt="Sample image"
        className="h-40 w-full rounded-lg"
        resizeMode="cover"
      />
    </ComponentSection>
  );
}

export default function BaseScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background-0"
      contentContainerClassName="px-6 pb-24 pt-6"
      showsVerticalScrollIndicator={false}
    >
      <VStack className="mb-6 gap-1">
        <Heading size="2xl">Base</Heading>
        <Text size="md" className="text-typography-500">
          Typography, badges, cards, layout &amp; media
        </Text>
      </VStack>

      <TypographySection />
      <CardsLayoutSection />
      <MediaSection />
    </ScrollView>
  );
}
