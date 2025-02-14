import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Avatar } from './Avatar';
import AvatarImg from './image.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
