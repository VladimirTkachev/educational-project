import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Text',
    value: '123',
  },
};
export const PrimaryDark: Story = {
  args: {
    placeholder: 'Text',
    value: '123',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
