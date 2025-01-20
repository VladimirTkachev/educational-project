import { userActions } from 'entities/User';
import { StateSchema } from 'App/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = { username: 'admin', id: '123' };

  //   mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }));

  //   const action = loginByUsername({ username: 'testName', password: 'testId' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });
  // test('error login', async () => {
  //   mockedAxios.post.mockResolvedValue(Promise.resolve({ states: 403 }));

  //   const action = loginByUsername({ username: 'testName', password: 'testId' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual('Ошибка авторизации');
  // });

  test('success login', async () => {
    const userValue = { username: 'admin', id: '123' };

    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({ username: 'testName', password: 'testId' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });
  test('error login', async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ states: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({ username: 'testName', password: 'testId' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Ошибка авторизации');
  });
});
