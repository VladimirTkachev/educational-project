import { StateSchema } from 'App/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import {
  getProfileData,
  getProfileError,
  getProfile,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
} from './getProfile';

describe('getProfile.test', () => {
  const data = {
    username: 'admin',
    age: 42,
    country: Country.Belarus,
    lastname: 'test',
    firstname: 'asd',
    city: 'test',
    currency: Currency.RUB,
  };

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('error');
  });
  test('should return profile slice', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfile(state as StateSchema)).toEqual({ data });
  });
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should profile frorm', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });
  test('should return read only', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('should return validation errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
});
