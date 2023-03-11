import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
        first: 'Alex',
        lastname: 'Testovich',
        age: 23,
        currency: Currency.RUB,
        country: Country.RUSSIA,
        city: 'Moscow',
        username: 'admin',
    };

    const state: DeepPartial<StateSchema> = {
        profile: {
            data,
        },
    };

    test('should work with filled state', () => {
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
