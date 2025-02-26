import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const Data = {
  username: 'admin',
  age: 42,
  country: Country.Belarus,
  lastname: 'test',
  firstname: 'asd',
  city: 'test',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true });
  });
  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data: Data, form: { username: '' } };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        data: Data,
        form: Data,
      });
  });
  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '312' } };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(Data)))
      .toEqual({
        form: Data,
      });
  });
  test('update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });
  test('update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(Data, '')))
      .toEqual({
        isLoading: false,
        data: Data,
        form: Data,
        readonly: true,
        validateErrors: undefined,
      });
  });
});
