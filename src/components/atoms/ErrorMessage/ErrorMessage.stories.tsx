import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta = {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'This field is required',
  },
};

export const LongMessage: Story = {
  args: {
    message: 'This is a longer error message that explains what went wrong in detail',
  },
};

export const NoMessage: Story = {
  args: {
    message: undefined,
  },
};

