import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title text',
    text: 'Sub text',
  },
};
export const PrimaryDark: Story = {
  args: {
    title: 'Title text',
    text: 'Sub text',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const TitleText: Story = {
  args: {
    title: 'Only title',
  },
};
export const TitleTextDark: Story = {
  args: {
    title: 'Only title',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SubText: Story = {
  args: {
    text: 'Only sub',
  },
};
export const SubTextDark: Story = {
  args: {
    text: 'Only sub',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const PrimaryError: Story = {
  args: {
    title: 'Title text',
    text: 'Sub text',
    theme: TextTheme.ERROR,
  },
};
