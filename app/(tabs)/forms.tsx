import { useState } from 'react';
import { Text as RNText, ScrollView } from 'react-native';
import { ComponentSection } from '@/components/showcase/component-section';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import {
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { AddIcon, CheckIcon, ChevronDownIcon, CircleIcon, SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { VStack } from '@/components/ui/vstack';

function ButtonsSection() {
  return (
    <ComponentSection title="Buttons">
      <RNText className="font-medium text-sm text-typography-600">Variants</RNText>
      <HStack className="flex-wrap gap-2">
        <Button action="primary">
          <ButtonText>Solid</ButtonText>
        </Button>
        <Button variant="outline" action="primary">
          <ButtonText>Outline</ButtonText>
        </Button>
        <Button variant="link" action="primary">
          <ButtonText>Link</ButtonText>
        </Button>
      </HStack>

      <RNText className="font-medium text-sm text-typography-600">Sizes</RNText>
      <HStack className="flex-wrap items-center gap-2">
        <Button size="xs">
          <ButtonText>XS</ButtonText>
        </Button>
        <Button size="sm">
          <ButtonText>SM</ButtonText>
        </Button>
        <Button size="md">
          <ButtonText>MD</ButtonText>
        </Button>
        <Button size="lg">
          <ButtonText>LG</ButtonText>
        </Button>
        <Button size="xl">
          <ButtonText>XL</ButtonText>
        </Button>
      </HStack>

      <RNText className="font-medium text-sm text-typography-600">Actions</RNText>
      <HStack className="flex-wrap gap-2">
        <Button action="primary">
          <ButtonText>Primary</ButtonText>
        </Button>
        <Button action="secondary">
          <ButtonText>Secondary</ButtonText>
        </Button>
        <Button action="positive">
          <ButtonText>Positive</ButtonText>
        </Button>
        <Button action="negative">
          <ButtonText>Negative</ButtonText>
        </Button>
      </HStack>

      <RNText className="font-medium text-sm text-typography-600">States</RNText>
      <HStack className="flex-wrap gap-2">
        <Button isDisabled>
          <ButtonText>Disabled</ButtonText>
        </Button>
        <Button action="primary">
          <ButtonIcon as={AddIcon} />
          <ButtonText>With Icon</ButtonText>
        </Button>
      </HStack>
    </ComponentSection>
  );
}

function FormControlsSection() {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ComponentSection title="Form Controls">
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

export default function FormsScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background-0"
      contentContainerClassName="px-6 pb-24 pt-6"
      showsVerticalScrollIndicator={false}
    >
      <VStack className="mb-6 gap-1">
        <Heading size="2xl">Forms</Heading>
        <Text size="md" className="text-typography-500">
          Buttons, inputs &amp; form controls
        </Text>
      </VStack>

      <ButtonsSection />
      <FormControlsSection />
    </ScrollView>
  );
}
