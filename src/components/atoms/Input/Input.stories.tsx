import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample text',
    type: 'text',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter text...',
    error: true,
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email',
    type: 'email',
  },
};

