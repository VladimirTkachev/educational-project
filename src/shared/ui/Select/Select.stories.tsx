import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Select, SelectOption } from './Select';

const options: SelectOption[] = [
  {
    content: 'Первый',
    value: '1',
  },
  {
    content: 'Второй',
    value: '2',
  },
  {
    content: 'Третий',
    value: '3',
  },
];

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Выбери',
    options,
  },
};
