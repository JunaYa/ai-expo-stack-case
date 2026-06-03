import { Text as RNText, ScrollView } from 'react-native';
import { ComponentSection } from '@/components/showcase/component-section';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AlertCircleIcon, CheckCircleIcon, CloseIcon, InfoIcon } from '@/components/ui/icon';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { Toast, ToastDescription, ToastTitle, useToast } from '@/components/ui/toast';
import { VStack } from '@/components/ui/vstack';

function AlertsSection() {
  return (
    <ComponentSection title="Alerts">
      <Alert action="info">
        <AlertIcon as={InfoIcon} />
        <AlertText>This is an informational alert.</AlertText>
      </Alert>
      <Alert action="success">
        <AlertIcon as={CheckCircleIcon} />
        <AlertText>Operation completed successfully!</AlertText>
      </Alert>
      <Alert action="warning">
        <AlertIcon as={AlertCircleIcon} />
        <AlertText>Please review before proceeding.</AlertText>
      </Alert>
      <Alert action="error">
        <AlertIcon as={CloseIcon} />
        <AlertText>Something went wrong.</AlertText>
      </Alert>
    </ComponentSection>
  );
}

function ProgressSection() {
  return (
    <ComponentSection title="Progress">
      <VStack className="gap-3">
        <RNText className="text-sm text-typography-600">30%</RNText>
        <Progress value={30} size="sm">
          <ProgressFilledTrack />
        </Progress>
        <RNText className="text-sm text-typography-600">60%</RNText>
        <Progress value={60} size="md">
          <ProgressFilledTrack />
        </Progress>
        <RNText className="text-sm text-typography-600">90%</RNText>
        <Progress value={90} size="lg">
          <ProgressFilledTrack />
        </Progress>
      </VStack>
    </ComponentSection>
  );
}

function SpinnerSection() {
  return (
    <ComponentSection title="Spinner">
      <HStack className="items-center gap-6">
        <VStack className="items-center gap-1">
          <Spinner size="small" />
          <RNText className="text-typography-500 text-xs">Small</RNText>
        </VStack>
        <VStack className="items-center gap-1">
          <Spinner size="large" />
          <RNText className="text-typography-500 text-xs">Large</RNText>
        </VStack>
      </HStack>
    </ComponentSection>
  );
}

function ToastSection() {
  const toast = useToast();

  return (
    <ComponentSection title="Toast">
      <HStack className="flex-wrap gap-2">
        {(['success', 'error', 'warning', 'info'] as const).map(action => (
          <Button
            key={action}
            size="sm"
            variant="outline"
            onPress={() => {
              toast.show({
                placement: 'top',
                render: ({ id }) => (
                  <Toast nativeID={`toast-${id}`} action={action} variant="solid">
                    <ToastTitle className="capitalize">{action}</ToastTitle>
                    <ToastDescription>This is a {action} toast.</ToastDescription>
                  </Toast>
                ),
              });
            }}
          >
            <ButtonText className="capitalize">{action}</ButtonText>
          </Button>
        ))}
      </HStack>
    </ComponentSection>
  );
}

function SkeletonSection() {
  return (
    <ComponentSection title="Skeleton">
      <VStack className="gap-4">
        <HStack className="items-center gap-3">
          <Skeleton variant="circular" className="h-12 w-12" />
          <VStack className="flex-1 gap-2">
            <Skeleton variant="rounded" className="h-4 w-3/4" />
            <Skeleton variant="rounded" className="h-3 w-1/2" />
          </VStack>
        </HStack>
        <Skeleton variant="rounded" className="h-32 w-full" />
        <SkeletonText _lines={3} className="h-3" />
      </VStack>
    </ComponentSection>
  );
}

export default function FeedbackScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background-0"
      contentContainerClassName="px-6 pb-24 pt-6"
      showsVerticalScrollIndicator={false}
    >
      <VStack className="mb-6 gap-1">
        <Heading size="2xl">Feedback</Heading>
        <Text size="md" className="text-typography-500">
          Alerts, progress, toasts &amp; loading states
        </Text>
      </VStack>

      <AlertsSection />
      <ProgressSection />
      <SpinnerSection />
      <ToastSection />
      <SkeletonSection />
    </ScrollView>
  );
}
