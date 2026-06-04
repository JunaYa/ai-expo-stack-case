import type { Meta, StoryObj } from '@storybook/react-native';

import { Button, ButtonText } from './index';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'link'],
    },
    action: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'positive', 'negative', 'default'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'solid',
    action: 'primary',
    size: 'md',
    isDisabled: false,
  },
  render: (args) => (
    <Button {...args}>
      <ButtonText>Button</ButtonText>
    </Button>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Link: Story = {
  args: { variant: 'link' },
};

export const Secondary: Story = {
  args: { action: 'secondary' },
};

export const Positive: Story = {
  args: { action: 'positive' },
  render: (args) => (
    <Button {...args}>
      <ButtonText>Success</ButtonText>
    </Button>
  ),
};

export const Negative: Story = {
  args: { action: 'negative' },
  render: (args) => (
    <Button {...args}>
      <ButtonText>Delete</ButtonText>
    </Button>
  ),
};

export const Disabled: Story = {
  args: { isDisabled: true },
};

export const Sizes: Story = {
  render: () => (
    <>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Button key={size} size={size} className="mb-2">
          <ButtonText>{size.toUpperCase()}</ButtonText>
        </Button>
      ))}
    </>
  ),
};
