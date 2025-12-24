import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Required: Story = {
  args: {
    required: true,
    children: 'Required Label',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'Label with htmlFor',
  },
};

