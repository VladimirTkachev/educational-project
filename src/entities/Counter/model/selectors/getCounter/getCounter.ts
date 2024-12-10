import { StateSchema } from 'App/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
