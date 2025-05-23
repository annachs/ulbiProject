import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('getLoginError selector test', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('Empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
