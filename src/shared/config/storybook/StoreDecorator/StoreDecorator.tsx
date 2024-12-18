import { DeepPartial } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'App/providers/StoreProvider';

export const StoreDecorator:
  (state: DeepPartial<StateSchema>) => Decorator = (state) => (Story) => (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
