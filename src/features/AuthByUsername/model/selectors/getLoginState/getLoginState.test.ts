import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'App/providers/StoreProvider';
import {
  getError, getIsLoading, getPassword, getUsername,
} from './getLoginState';

describe('getLoginState.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getError(state as StateSchema)).toEqual(undefined);
  });
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };

    expect(getIsLoading(state as StateSchema)).toEqual(false);
  });
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };

    expect(getPassword(state as StateSchema)).toEqual('123');
  });
  test('should return empty password', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getPassword(state as StateSchema)).toEqual(undefined);
  });
  test('should return name', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
      },
    };

    expect(getUsername(state as StateSchema)).toEqual('user');
  });
  test('should return empty name', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getUsername(state as StateSchema)).toEqual(undefined);
  });
});
