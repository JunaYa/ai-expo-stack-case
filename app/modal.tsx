import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function ModalScreen() {
  return (
    <View className="flex-1 bg-background-0 px-6 pt-8">
      <VStack className="gap-6">
        <VStack className="gap-1">
          <Heading size="xl">Modal Example</Heading>
          <Text size="sm" className="text-typography-500">
            This page is presented as a native modal via Expo Router
          </Text>
        </VStack>

        <Card size="md" variant="outline">
          <VStack className="gap-3">
            <Heading size="md">Implementation Details</Heading>
            <Text size="sm">
              This screen uses Expo Router's native modal presentation. The modal slides up from the
              bottom on iOS and uses the platform's default modal animation on Android.
            </Text>
            <HStack className="flex-wrap gap-2">
              <Badge action="info">
                <BadgeText>Stack.Screen</BadgeText>
              </Badge>
              <Badge action="info">
                <BadgeText>presentation: modal</BadgeText>
              </Badge>
            </HStack>
          </VStack>
        </Card>

        <Divider />

        <Button action="secondary" variant="outline" onPress={() => router.back()}>
          <ButtonText>Dismiss Modal</ButtonText>
        </Button>
      </VStack>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
