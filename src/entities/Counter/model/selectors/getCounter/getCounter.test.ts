import { StateSchema } from 'App/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
  });
});
