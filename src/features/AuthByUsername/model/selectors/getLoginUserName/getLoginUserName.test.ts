import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginError.test', () => {
    test('should return field value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123',

            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
