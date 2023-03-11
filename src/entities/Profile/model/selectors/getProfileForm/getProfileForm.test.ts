import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const form = {
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
            form,
        },
    };
    test('should return form', () => {
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
