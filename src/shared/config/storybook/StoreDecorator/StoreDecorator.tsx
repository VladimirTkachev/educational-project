import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'App/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsynReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator:
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) => Decorator = (state, asyncReducers) => (Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsynReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
