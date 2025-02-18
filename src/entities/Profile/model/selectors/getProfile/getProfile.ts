import { StateSchema } from 'App/providers/StoreProvider';

export const getProfile = (state: StateSchema) => state.profile;

export const getProfileLoading = (state: StateSchema) => getProfile(state)?.isLoading;

export const getProfileData = (state: StateSchema) => getProfile(state)?.data;

export const getProfileForm = (state: StateSchema) => getProfile(state)?.form;

export const getProfileReadonly = (state: StateSchema) => getProfile(state)?.readonly;

export const getProfileError = (state: StateSchema) => getProfile(state)?.error;

export const getProfileValidateErrors = (state: StateSchema) => getProfile(state)?.validateErrors;
