import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    const isLoading = true;

    const state: DeepPartial<StateSchema> = {
        profile: {
            isLoading,
        },
    };
    test('should return IsLoading', () => {
        expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
