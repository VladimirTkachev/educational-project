import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    to: '#',
    children: 'TEXT',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};
export const PrimaryDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
export const SecondaryDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
