import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
  test('should decrement couter value', () => {
    const state: CounterSchema = {
      value: 0,
    };
    const { decrement } = counterActions;

    expect(counterReducer(state, decrement))
      .toEqual({ value: -1 });
  });
  test('should increment couter value', () => {
    const state: CounterSchema = {
      value: 0,
    };
    const { increment } = counterActions;

    expect(counterReducer(state, increment))
      .toEqual({ value: 1 });
  });
  test('should work with empty state', () => {
    const { increment } = counterActions;

    expect(counterReducer(undefined, increment))
      .toEqual({ value: 1 });
  });
});
