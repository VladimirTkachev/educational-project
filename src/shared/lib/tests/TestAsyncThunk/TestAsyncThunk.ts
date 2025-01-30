import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'App/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreator<Returen, Arg, RejectedValue>
  = (params: Arg) => AsyncThunkAction<Returen, Arg, { rejectValue: RejectedValue; }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returen, Arg, RejectedValue = string> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Returen, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreator<Returen, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.getState = jest.fn();
    this.dispatch = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  callThunk = async (params: Arg) => {
    const action = this.actionCreator(params);
    const result = await action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        navigate: this.navigate,
      },
    );

    return result;
  };
}
