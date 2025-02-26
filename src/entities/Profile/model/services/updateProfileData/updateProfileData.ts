import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'App/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfile/getProfile';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const state = getState();
    const formData = getProfileForm(state);

    const errors = validateProfile(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log('e:', e);

      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
