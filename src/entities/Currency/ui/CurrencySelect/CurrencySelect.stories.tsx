import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
  args: {},
};
