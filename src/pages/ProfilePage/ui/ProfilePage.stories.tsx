import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from 'App/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import avatar from 'shared/assets/test/image.png';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};
export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
