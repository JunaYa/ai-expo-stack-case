import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ComponentSection } from '@/components/showcase/component-section';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
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
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { Icon, CloseIcon, ChevronDownIcon, AddIcon } from '@/components/ui/icon';

function ModalSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ComponentSection title="Modal">
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Open Modal</ButtonText>
      </Button>

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
    </ComponentSection>
  );
}

function AlertDialogSection() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <ComponentSection title="Alert Dialog">
      <Button variant="outline" onPress={() => setShowDialog(true)}>
        <ButtonText>Open Alert Dialog</ButtonText>
      </Button>

      <AlertDialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
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
            <Button variant="outline" action="secondary" onPress={() => setShowDialog(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button action="negative" onPress={() => setShowDialog(false)}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ComponentSection>
  );
}

function TooltipSection() {
  return (
    <ComponentSection title="Tooltip">
      <HStack className="gap-3">
        <Tooltip
          trigger={(triggerProps) => (
            <Button variant="outline" {...triggerProps}>
              <ButtonText>Hover me</ButtonText>
            </Button>
          )}
        >
          <TooltipContent>
            <TooltipText>This is a tooltip</TooltipText>
          </TooltipContent>
        </Tooltip>
      </HStack>
    </ComponentSection>
  );
}

function ActionsheetSection() {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <ComponentSection title="Actionsheet">
      <Button variant="outline" onPress={() => setShowSheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>

      <Actionsheet isOpen={showSheet} onClose={() => setShowSheet(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={() => setShowSheet(false)}>
            <ActionsheetItemText>Edit</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setShowSheet(false)}>
            <ActionsheetItemText>Duplicate</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setShowSheet(false)}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </ComponentSection>
  );
}

function AccordionSection() {
  return (
    <ComponentSection title="Accordion">
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
        <AccordionItem value="item-3">
          <AccordionHeader>
            <AccordionTrigger>
              <AccordionTitleText>What is NativeWind?</AccordionTitleText>
              <AccordionIcon as={ChevronDownIcon} />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText>
              NativeWind uses Tailwind CSS as a universal styling language for React Native
              across all platforms.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ComponentSection>
  );
}

function FabSection() {
  return (
    <ComponentSection title="FAB">
      <View className="relative h-32 w-full rounded-lg bg-background-50">
        <Fab size="lg" placement="bottom right">
          <FabIcon as={AddIcon} />
          <FabLabel>Action</FabLabel>
        </Fab>
      </View>
    </ComponentSection>
  );
}

export default function OverlaysScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background-0"
      contentContainerClassName="px-6 pb-24 pt-6"
      showsVerticalScrollIndicator={false}
    >
      <VStack className="mb-6 gap-1">
        <Heading size="2xl">Overlays</Heading>
        <Text size="md" className="text-typography-500">
          Modals, dialogs, sheets &amp; disclosure
        </Text>
      </VStack>

      <ModalSection />
      <AlertDialogSection />
      <TooltipSection />
      <ActionsheetSection />
      <AccordionSection />
      <FabSection />
    </ScrollView>
  );
}
