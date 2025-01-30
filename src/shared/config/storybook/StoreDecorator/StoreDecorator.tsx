import { Decorator } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'App/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

const defaultAsynReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator:
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
  ) => Decorator = (state, asyncReducers) => (Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsynReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
