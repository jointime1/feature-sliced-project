import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    const err = 'error';

    const state: DeepPartial<StateSchema> = {
        profile: {
            error: err,
        },
    };
    test('should return error message', () => {
        expect(getProfileError(state as StateSchema)).toEqual(err);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
