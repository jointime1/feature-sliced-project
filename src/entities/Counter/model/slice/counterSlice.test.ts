import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    const state: CounterSchema = { value: 10 };

    test('decremented', () => {
        expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 });
    });

    test('with undefined', () => {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
    });
});
