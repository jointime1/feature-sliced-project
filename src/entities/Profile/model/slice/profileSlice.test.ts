import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Alex',
    lastname: 'Testovich',
    age: 23,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: data };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ age: 25 }),
        )).toEqual({ form: { ...data, age: 25 } });
    });

    test('read only', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });
    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({ readonly: true });
    });
});
