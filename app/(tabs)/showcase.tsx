import { useState, useRef } from 'react';
import { ScrollView, View, Text as RNText } from 'react-native';
import { ComponentSection } from '@/components/showcase/component-section';

import { Button, ButtonText, ButtonIcon, ButtonGroup } from '@/components/ui/button';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from '@/components/ui/select';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from '@/components/ui/checkbox';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from '@/components/ui/radio';
import { Switch } from '@/components/ui/switch';
import { Slider, SliderThumb, SliderTrack, SliderFilledTrack } from '@/components/ui/slider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Divider } from '@/components/ui/divider';
import { Alert, AlertText, AlertIcon } from '@/components/ui/alert';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Spinner } from '@/components/ui/spinner';
import { useToast, Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from '@/components/ui/alert-dialog';
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from '@/components/ui/actionsheet';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Image } from '@/components/ui/image';
import {
  Icon,
  SearchIcon,
  CheckIcon,
  CloseIcon,
  InfoIcon,
  SunIcon,
  MoonIcon,
  StarIcon,
  BellIcon,
  SettingsIcon,
  AddIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from '@/components/ui/icon';
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from '@/components/ui/form-control';

function ButtonsSection() {
  return (
    <ComponentSection title="Buttons">
      <RNText className="text-sm font-medium text-typography-600">Variants</RNText>
      <HStack className="flex-wrap gap-2">
        <Button action="primary"><ButtonText>Solid</ButtonText></Button>
        <Button variant="outline" action="primary"><ButtonText>Outline</ButtonText></Button>
        <Button variant="link" action="primary"><ButtonText>Link</ButtonText></Button>
      </HStack>

      <RNText className="text-sm font-medium text-typography-600">Sizes</RNText>
      <HStack className="flex-wrap items-center gap-2">
        <Button size="xs"><ButtonText>XS</ButtonText></Button>
        <Button size="sm"><ButtonText>SM</ButtonText></Button>
        <Button size="md"><ButtonText>MD</ButtonText></Button>
        <Button size="lg"><ButtonText>LG</ButtonText></Button>
        <Button size="xl"><ButtonText>XL</ButtonText></Button>
      </HStack>

      <RNText className="text-sm font-medium text-typography-600">Actions</RNText>
      <HStack className="flex-wrap gap-2">
        <Button action="primary"><ButtonText>Primary</ButtonText></Button>
        <Button action="secondary"><ButtonText>Secondary</ButtonText></Button>
        <Button action="positive"><ButtonText>Positive</ButtonText></Button>
        <Button action="negative"><ButtonText>Negative</ButtonText></Button>
      </HStack>

      <RNText className="text-sm font-medium text-typography-600">States</RNText>
      <HStack className="flex-wrap gap-2">
        <Button isDisabled><ButtonText>Disabled</ButtonText></Button>
        <Button action="primary">
          <ButtonIcon as={AddIcon} />
          <ButtonText>With Icon</ButtonText>
        </Button>
      </HStack>
    </ComponentSection>
  );
}

function FormsSection() {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ComponentSection title="Forms">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputSlot className="pl-3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Enter your email" />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>We'll never share your email.</FormControlHelperText>
        </FormControlHelper>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Select</FormControlLabelText>
        </FormControlLabel>
        <Select>
          <SelectTrigger>
            <SelectInput placeholder="Choose an option" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Option 1" value="1" />
              <SelectItem label="Option 2" value="2" />
              <SelectItem label="Option 3" value="3" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Checkboxes</FormControlLabelText>
        </FormControlLabel>
        <CheckboxGroup value={checkboxValues} onChange={setCheckboxValues}>
          <VStack className="gap-2">
            <Checkbox value="react">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>React Native</CheckboxLabel>
            </Checkbox>
            <Checkbox value="expo">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Expo</CheckboxLabel>
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Radio</FormControlLabelText>
        </FormControlLabel>
        <RadioGroup value={radioValue} onChange={setRadioValue}>
          <VStack className="gap-2">
            <Radio value="option1">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Option 1</RadioLabel>
            </Radio>
            <Radio value="option2">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Option 2</RadioLabel>
            </Radio>
          </VStack>
        </RadioGroup>
      </FormControl>

      <HStack className="items-center gap-3">
        <RNText className="text-sm text-typography-700">Switch</RNText>
        <Switch value={switchValue} onToggle={setSwitchValue} />
      </HStack>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Slider</FormControlLabelText>
        </FormControlLabel>
        <Slider defaultValue={40} minValue={0} maxValue={100}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Message</FormControlLabelText>
        </FormControlLabel>
        <Textarea>
          <TextareaInput placeholder="Write something..." />
        </Textarea>
      </FormControl>
    </ComponentSection>
  );
}

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
        <Badge action="info"><BadgeText>Info</BadgeText></Badge>
        <Badge action="success"><BadgeText>Success</BadgeText></Badge>
        <Badge action="warning"><BadgeText>Warning</BadgeText></Badge>
        <Badge action="error"><BadgeText>Error</BadgeText></Badge>
        <Badge variant="outline"><BadgeText>Outline</BadgeText></Badge>
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

function FeedbackSection() {
  const toast = useToast();

  return (
    <ComponentSection title="Feedback">
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

      <RNText className="text-sm font-medium text-typography-600">Progress</RNText>
      <VStack className="gap-3">
        <Progress value={30} size="sm">
          <ProgressFilledTrack />
        </Progress>
        <Progress value={60} size="md">
          <ProgressFilledTrack />
        </Progress>
        <Progress value={90} size="lg">
          <ProgressFilledTrack />
        </Progress>
      </VStack>

      <RNText className="text-sm font-medium text-typography-600">Spinner</RNText>
      <HStack className="gap-4">
        <Spinner size="small" />
        <Spinner size="large" />
      </HStack>

      <Button
        onPress={() => {
          toast.show({
            placement: 'top',
            render: ({ id }) => (
              <Toast nativeID={`toast-${id}`} action="success" variant="solid">
                <ToastTitle>Success</ToastTitle>
                <ToastDescription>This is a toast notification.</ToastDescription>
              </Toast>
            ),
          });
        }}
      >
        <ButtonText>Show Toast</ButtonText>
      </Button>
    </ComponentSection>
  );
}

function OverlaysSection() {
  const [showModal, setShowModal] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [showActionsheet, setShowActionsheet] = useState(false);

  return (
    <ComponentSection title="Overlays">
      <HStack className="flex-wrap gap-2">
        <Button onPress={() => setShowModal(true)}>
          <ButtonText>Modal</ButtonText>
        </Button>
        <Button variant="outline" onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Alert Dialog</ButtonText>
        </Button>
        <Tooltip
          trigger={(triggerProps) => (
            <Button variant="outline" {...triggerProps}>
              <ButtonText>Tooltip</ButtonText>
            </Button>
          )}
        >
          <TooltipContent>
            <TooltipText>This is a tooltip</TooltipText>
          </TooltipContent>
        </Tooltip>
        <Button variant="outline" onPress={() => setShowActionsheet(true)}>
          <ButtonText>Actionsheet</ButtonText>
        </Button>
      </HStack>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Modal Title</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>This is a modal body. You can put any content here.</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" action="secondary" onPress={() => setShowModal(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={() => setShowModal(false)}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog isOpen={showAlertDialog} onClose={() => setShowAlertDialog(false)}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">Are you sure?</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>This action cannot be undone.</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" action="secondary" onPress={() => setShowAlertDialog(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button action="negative" onPress={() => setShowAlertDialog(false)}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Actionsheet isOpen={showActionsheet} onClose={() => setShowActionsheet(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={() => setShowActionsheet(false)}>
            <ActionsheetItemText>Edit</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setShowActionsheet(false)}>
            <ActionsheetItemText>Duplicate</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setShowActionsheet(false)}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
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

function DisclosureSection() {
  return (
    <ComponentSection title="Disclosure">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>
              <AccordionTitleText>What is Expo?</AccordionTitleText>
              <AccordionIcon as={ChevronDownIcon} />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              Expo is a framework for building universal React Native apps with the best
              developer experience.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger>
              <AccordionTitleText>What is gluestack-ui?</AccordionTitleText>
              <AccordionIcon as={ChevronDownIcon} />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              gluestack-ui is a universal component library with NativeWind styling,
              accessibility, and cross-platform support.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <RNText className="text-sm font-medium text-typography-600">Skeleton</RNText>
      <VStack className="gap-3">
        <Skeleton variant="rounded" className="h-6 w-3/4" />
        <SkeletonText _lines={3} className="h-3" />
        <Skeleton variant="circular" className="h-12 w-12" />
      </VStack>
    </ComponentSection>
  );
}

export default function ShowcaseScreen() {
  return (
    <View className="flex-1 bg-background-0">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pb-24 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <VStack className="mb-6 gap-1">
          <Heading size="2xl">Component Showcase</Heading>
          <Text size="md" className="text-typography-500">
            All gluestack-ui components with interactive demos
          </Text>
        </VStack>

        <ButtonsSection />
        <FormsSection />
        <TypographySection />
        <CardsLayoutSection />
        <FeedbackSection />
        <OverlaysSection />
        <MediaSection />
        <DisclosureSection />
      </ScrollView>

      <Fab size="lg" placement="bottom right" className="mb-4 mr-4">
        <FabIcon as={AddIcon} />
        <FabLabel>FAB</FabLabel>
      </Fab>
    </View>
  );
}
