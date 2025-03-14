import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('counterSlice increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('counterSlice decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('counterSlice with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
