import { Link } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

const layouts = [
  {
    href: '/tab-showcase/(two-tabs)',
    title: '2 Tabs',
    desc: 'Minimal two-tab layout',
    badge: '2',
  },
  {
    href: '/tab-showcase/(three-tabs)',
    title: '3 Tabs',
    desc: 'Classic three-tab navigation',
    badge: '3',
  },
  {
    href: '/tab-showcase/(four-tabs)',
    title: '4 Tabs',
    desc: 'Standard four-tab layout',
    badge: '4',
  },
  {
    href: '/tab-showcase/(five-tabs)',
    title: '5 Tabs',
    desc: 'Full five-tab navigation',
    badge: '5',
  },
  {
    href: '/tab-showcase/(center-fab)',
    title: '1 + 3 + 1',
    desc: 'Center FAB with flanking tabs',
    badge: 'FAB',
  },
  {
    href: '/tab-showcase/(split-center)',
    title: '2 + 1 + 2',
    desc: 'Symmetric layout with prominent center',
    badge: 'Split',
  },
  {
    href: '/tab-showcase/(glass-tabs)',
    title: 'Glass Effect',
    desc: 'iOS-style translucent blur tab bar',
    badge: 'Blur',
  },
  {
    href: '/tab-showcase/(glass-pill)',
    title: 'Glass Pill + Action',
    desc: 'Floating glass tab pill with a separate action button',
    badge: 'Glass',
  },
  {
    href: '/tab-showcase/bottom-tabs',
    title: 'Bottom Tabs + Search',
    desc: 'react-native-bottom-tabs with role="search" pill',
    badge: 'Search',
  },
] as const;

export default function TabShowcaseIndex() {
  return (
    <ScrollView className="flex-1 bg-background-0" contentContainerClassName="px-6 pb-24 pt-6">
      <VStack className="mb-6 gap-1">
        <Heading size="2xl">Tab Layouts</Heading>
        <Text className="text-sm text-typography-500">
          Different bottom tab configurations &amp; styles
        </Text>
      </VStack>

      <VStack className="gap-3">
        {layouts.map(item => (
          <Link key={item.href} href={item.href as any} asChild>
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
