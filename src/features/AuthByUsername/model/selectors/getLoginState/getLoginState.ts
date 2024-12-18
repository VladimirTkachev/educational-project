import { StateSchema } from 'App/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state?.loginForm;
