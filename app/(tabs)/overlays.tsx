import {
  Host as AndroidHost,
  Icon as ComposeIcon,
  Text as ComposeText,
  DropdownMenu,
  DropdownMenuItem,
} from '@expo/ui/jetpack-compose';
import {
  ContextMenu,
  Host,
  Section,
  Button as SwiftButton,
  Divider as SwiftDivider,
  Text as SwiftText,
} from '@expo/ui/swift-ui';
import { useState } from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import ContextMenuView from 'react-native-context-menu-view';
import { ComponentSection } from '@/components/showcase/component-section';
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Button, ButtonText } from '@/components/ui/button';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AddIcon, ChevronDownIcon, CloseIcon, Icon } from '@/components/ui/icon';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { VStack } from '@/components/ui/vstack';

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
          trigger={triggerProps => (
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
              Expo is a framework for building universal React Native apps with the best developer
              experience.
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
              gluestack-ui is a universal component library with NativeWind styling, accessibility,
              and cross-platform support.
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
              NativeWind uses Tailwind CSS as a universal styling language for React Native across
              all platforms.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ComponentSection>
  );
}

function IOSContextMenuSection() {
  return (
    <ComponentSection title="Context Menu — iOS (SwiftUI)">
      <Text size="sm" className="mb-2 text-typography-500">
        Long press to trigger native UIMenu via @expo/ui.
      </Text>
      <VStack className="gap-4">
        <Host matchContents>
          <ContextMenu>
            <ContextMenu.Items>
              <SwiftButton label="Share" systemImage="square.and.arrow.up" onPress={() => {}} />
              <SwiftButton label="Favorite" systemImage="heart" onPress={() => {}} />
              {/* biome-ignore lint/a11y/useValidAriaRole: SwiftUI prop, not ARIA */}
              <SwiftButton
                label="Delete"
                systemImage="trash"
                role="destructive"
                onPress={() => {}}
              />
            </ContextMenu.Items>
            <ContextMenu.Trigger>
              <SwiftText>With System Icons — Long press</SwiftText>
            </ContextMenu.Trigger>
          </ContextMenu>
        </Host>

        <Host matchContents>
          <ContextMenu>
            <ContextMenu.Items>
              <Section title="Actions">
                <SwiftButton label="Edit" systemImage="pencil" onPress={() => {}} />
                <SwiftButton label="Duplicate" systemImage="doc.on.doc" onPress={() => {}} />
              </Section>
              <SwiftDivider />
              {/* biome-ignore lint/a11y/useValidAriaRole: SwiftUI prop, not ARIA */}
              <SwiftButton
                label="Delete"
                systemImage="trash"
                role="destructive"
                onPress={() => {}}
              />
            </ContextMenu.Items>
            <ContextMenu.Trigger>
              <SwiftText>With Sections — Long press</SwiftText>
            </ContextMenu.Trigger>
          </ContextMenu>
        </Host>
      </VStack>
    </ComponentSection>
  );
}

function AndroidDropdownMenuSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <ComponentSection title="Dropdown Menu — Android (Jetpack Compose)">
      <Text size="sm" className="mb-2 text-typography-500">
        Long press to open Material 3 DropdownMenu via @expo/ui.
      </Text>
      <Pressable onLongPress={() => setExpanded(true)}>
        <View className="rounded-xl bg-background-50 px-4 py-3">
          <Text size="md" className="font-semibold text-typography-900">
            Long press for menu
          </Text>
          <Text size="sm" className="text-typography-500">
            Material 3 DropdownMenu
          </Text>
        </View>
      </Pressable>
      <AndroidHost style={{ position: 'absolute' }}>
        <DropdownMenu expanded={expanded} onDismissRequest={() => setExpanded(false)}>
          <DropdownMenu.Items>
            <DropdownMenuItem onClick={() => setExpanded(false)}>
              <DropdownMenuItem.LeadingIcon>
                <ComposeIcon name="share" />
              </DropdownMenuItem.LeadingIcon>
              <DropdownMenuItem.Text>
                <ComposeText>Share</ComposeText>
              </DropdownMenuItem.Text>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setExpanded(false)}>
              <DropdownMenuItem.LeadingIcon>
                <ComposeIcon name="favorite" />
              </DropdownMenuItem.LeadingIcon>
              <DropdownMenuItem.Text>
                <ComposeText>Favorite</ComposeText>
              </DropdownMenuItem.Text>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setExpanded(false)}>
              <DropdownMenuItem.LeadingIcon>
                <ComposeIcon name="delete" />
              </DropdownMenuItem.LeadingIcon>
              <DropdownMenuItem.Text>
                <ComposeText>Delete</ComposeText>
              </DropdownMenuItem.Text>
            </DropdownMenuItem>
          </DropdownMenu.Items>
        </DropdownMenu>
      </AndroidHost>
    </ComponentSection>
  );
}

function CrossPlatformContextMenuSection() {
  return (
    <ComponentSection title="Context Menu — Cross-Platform">
      <Text size="sm" className="mb-2 text-typography-500">
        Long press to trigger native menu on both platforms via react-native-context-menu-view.
      </Text>
      <VStack className="gap-4">
        <ContextMenuView
          actions={[
            { title: 'Share', systemIcon: 'square.and.arrow.up' },
            { title: 'Favorite', systemIcon: 'heart' },
            { title: 'Delete', systemIcon: 'trash', destructive: true },
          ]}
          onPress={() => {}}
        >
          <View className="rounded-xl bg-background-50 px-4 py-3">
            <Text size="md" className="font-semibold text-typography-900">
              Basic Actions
            </Text>
            <Text size="sm" className="text-typography-500">
              Long press — iOS UIMenu / Android PopupMenu
            </Text>
          </View>
        </ContextMenuView>

        <ContextMenuView
          actions={[
            { title: 'Edit', systemIcon: 'pencil' },
            { title: 'Duplicate', systemIcon: 'doc.on.doc' },
            {
              title: 'Share...',
              systemIcon: 'square.and.arrow.up',
              actions: [{ title: 'Twitter' }, { title: 'Messages' }, { title: 'Email' }],
            },
            { title: 'Delete', systemIcon: 'trash', destructive: true },
          ]}
          onPress={() => {}}
        >
          <View className="rounded-xl bg-background-50 px-4 py-3">
            <Text size="md" className="font-semibold text-typography-900">
              Nested Submenu
            </Text>
            <Text size="sm" className="text-typography-500">
              Long press — with child actions
            </Text>
          </View>
        </ContextMenuView>
      </VStack>
    </ComponentSection>
  );
}

function ContextMenuShowcase() {
  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  return (
    <>
      {isIOS && <IOSContextMenuSection />}
      {isAndroid && <AndroidDropdownMenuSection />}
      <CrossPlatformContextMenuSection />
    </>
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
      <ContextMenuShowcase />
      <AccordionSection />
      <FabSection />
    </ScrollView>
  );
}
