import { type Href, Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

type ShowcaseCase = {
  badge: string;
  desc: string;
  href: Href;
  title: string;
};

const cases: ShowcaseCase[] = [
  {
    href: '/showcase/(glass-pill)/albums',
    title: 'Photos Gallery',
    desc: 'Albums, contacts, article, and search in a floating glass gallery',
    badge: 'Photos',
  },
  {
    href: '/showcase/(two-tabs)/home',
    title: '2 Tabs',
    desc: 'Minimal two-tab layout',
    badge: '2',
  },
  {
    href: '/showcase/(three-tabs)/home',
    title: '3 Tabs',
    desc: 'Classic three-tab navigation',
    badge: '3',
  },
  {
    href: '/showcase/(four-tabs)/home',
    title: '4 Tabs',
    desc: 'Standard four-tab layout',
    badge: '4',
  },
  {
    href: '/showcase/(five-tabs)/home',
    title: '5 Tabs',
    desc: 'Full five-tab navigation',
    badge: '5',
  },
  {
    href: '/showcase/(center-fab)/home',
    title: '1 + 3 + 1',
    desc: 'Center FAB with flanking tabs',
    badge: 'FAB',
  },
  {
    href: '/showcase/(split-center)/home',
    title: '2 + 1 + 2',
    desc: 'Symmetric layout with prominent center',
    badge: 'Split',
  },
  {
    href: '/showcase/(glass-tabs)/home',
    title: 'Glass Effect',
    desc: 'iOS-style translucent blur tab bar',
    badge: 'Blur',
  },
] as const;

export default function ShowcaseIndex() {
  return (
    <ScrollView className="flex-1 bg-background-0" contentContainerClassName="px-6 pb-24 pt-6">
      <VStack className="mb-6 gap-1">
        <Heading size="2xl">Showcase</Heading>
        <Text className="text-sm text-typography-500">
          Independent cases for native UI patterns and app experiences
        </Text>
      </VStack>

      <VStack className="gap-3">
        {cases.map(item => (
          <Link key={String(item.href)} href={item.href} asChild>
            <Card size="md" variant="elevated" className="active:opacity-80">
              <HStack className="items-center gap-3">
                <Badge size="lg" action="info" variant="solid">
                  <BadgeText>{item.badge}</BadgeText>
                </Badge>
                <VStack className="flex-1 gap-1">
                  <Text className="font-semibold text-base text-typography-900">{item.title}</Text>
                  <Text className="text-sm text-typography-500">{item.desc}</Text>
                </VStack>
              </HStack>
            </Card>
          </Link>
        ))}
      </VStack>
    </ScrollView>
  );
}
