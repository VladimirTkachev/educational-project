import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'App/providers/StoreProvider';

type ActionCreator<Returen, Arg, RejectedValue>
  = (params: Arg) => AsyncThunkAction<Returen, Arg, { rejectValue: RejectedValue; }>

export class TestAsyncThunk<Returen, Arg, RejectedValue = string> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Returen, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreator<Returen, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.getState = jest.fn();
    this.dispatch = jest.fn();
  }

  callThunk = async (params: Arg) => {
    const action = this.actionCreator(params);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  };
}
