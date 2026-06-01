import { ScrollView, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';

function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const modes = ['light', 'dark', 'system'] as const;

  return (
    <VStack className="gap-2">
      <Text className="text-sm font-medium text-typography-600">Theme</Text>
      <HStack className="gap-2">
        {modes.map((mode) => (
          <Button
            key={mode}
            size="sm"
            variant={colorScheme === mode ? 'solid' : 'outline'}
            action="primary"
            onPress={() => setColorScheme(mode)}
          >
            <ButtonText className="capitalize">{mode}</ButtonText>
          </Button>
        ))}
      </HStack>
    </VStack>
  );
}

function StackBadges() {
  const stack = ['Expo 56', 'NativeWind v4', 'gluestack-ui v3'];
  return (
    <HStack className="flex-wrap gap-2">
      {stack.map((item) => (
        <Badge key={item} size="lg" variant="solid" action="info">
          <BadgeText>{item}</BadgeText>
        </Badge>
      ))}
    </HStack>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background-0"
      contentContainerClassName="px-6 pb-24 pt-12"
      showsVerticalScrollIndicator={false}
    >
      <VStack className="gap-6">
        <VStack className="gap-1">
          <Heading size="2xl">Expo Stack App</Heading>
          <Text className="text-base text-typography-500">
            UI tech stack scaffold &amp; component preview
          </Text>
        </VStack>

        <StackBadges />

        <Divider />

        <ThemeToggle />

        <Divider />

        <VStack className="gap-3">
          <Text className="text-sm font-medium text-typography-600">
            Showcase Tabs
          </Text>
          <Link href="/base" asChild>
            <Card size="md" variant="elevated" className="active:opacity-80">
              <VStack className="gap-1">
                <Text className="text-base font-semibold text-typography-900">
                  Base
                </Text>
                <Text className="text-sm text-typography-500">
                  Typography, badges, cards, layout &amp; media
                </Text>
              </VStack>
            </Card>
          </Link>
          <Link href="/forms" asChild>
            <Card size="md" variant="elevated" className="active:opacity-80">
              <VStack className="gap-1">
                <Text className="text-base font-semibold text-typography-900">
                  Forms
                </Text>
                <Text className="text-sm text-typography-500">
                  Buttons, inputs &amp; form controls
                </Text>
              </VStack>
            </Card>
          </Link>
          <Link href="/feedback" asChild>
            <Card size="md" variant="elevated" className="active:opacity-80">
              <VStack className="gap-1">
                <Text className="text-base font-semibold text-typography-900">
                  Feedback
                </Text>
                <Text className="text-sm text-typography-500">
                  Alerts, progress, toasts &amp; loading states
                </Text>
              </VStack>
            </Card>
          </Link>
          <Link href="/overlays" asChild>
            <Card size="md" variant="elevated" className="active:opacity-80">
              <VStack className="gap-1">
                <Text className="text-base font-semibold text-typography-900">
                  Overlays
                </Text>
                <Text className="text-sm text-typography-500">
                  Modals, dialogs, sheets &amp; disclosure
                </Text>
              </VStack>
            </Card>
          </Link>
        </VStack>

        <Divider />

        <VStack className="gap-3">
          <Text className="text-sm font-medium text-typography-600">
            Tab Layouts
          </Text>
          <Link href="/tab-showcase" asChild>
            <Card size="md" variant="elevated" className="active:opacity-80">
              <HStack className="items-center gap-3">
                <Badge size="lg" action="success" variant="solid">
                  <BadgeText>7</BadgeText>
                </Badge>
                <VStack className="flex-1 gap-1">
                  <Text className="text-base font-semibold text-typography-900">
                    Tab Layout Showcase
                  </Text>
                  <Text className="text-sm text-typography-500">
                    2/3/4/5 tabs, center FAB, split center, iOS glass effect
                  </Text>
                </VStack>
              </HStack>
            </Card>
          </Link>
          <Link href="/modal" asChild>
            <Card size="md" variant="outline" className="active:opacity-80">
              <VStack className="gap-1">
                <Text className="text-base font-semibold text-typography-900">
                  Modal (Route)
                </Text>
                <Text className="text-sm text-typography-500">
                  Native modal presentation via Expo Router
                </Text>
              </VStack>
            </Card>
          </Link>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
