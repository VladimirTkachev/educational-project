import { StateSchema } from 'App/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state?.loginForm;

export const getPassword = (state: StateSchema) => getLoginState(state)?.password;

export const getUsername = (state: StateSchema) => getLoginState(state)?.username;

export const getError = (state: StateSchema) => getLoginState(state)?.error;

export const getIsLoading = (state: StateSchema) => getLoginState(state)?.isLoading;
