import { StateSchema } from 'App/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  test('shoud return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0,
      },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(0);
  });
});
