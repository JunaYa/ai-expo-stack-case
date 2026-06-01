import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center bg-background-0 p-5">
        <VStack className="items-center gap-4">
          <Heading size="xl">This screen doesn't exist.</Heading>
          <Link href="/" asChild>
            <Button variant="link" action="primary">
              <ButtonText>Go to home screen</ButtonText>
            </Button>
          </Link>
        </VStack>
      </View>
    </>
  );
}
