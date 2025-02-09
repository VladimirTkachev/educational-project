import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'feature/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: { },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};
export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
export const ErrorForm: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        error: 'Ошибка авторизации',
      },
    }),
  ],
};
export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
