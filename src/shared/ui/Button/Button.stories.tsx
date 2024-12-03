import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};
export const ClearDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlineDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};
