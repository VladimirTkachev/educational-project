import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import avatar from 'shared/assets/test/image.png';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    data: {
      username: 'admin',
      age: 42,
      country: Country.Belarus,
      lastname: 'test',
      firstname: 'asd',
      city: 'test',
      currency: Currency.RUB,
      avatar,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};

export const ErrorForm: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
