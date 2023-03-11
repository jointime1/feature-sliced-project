import { Profile, ValidateProfileError } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        lastname,
        first,
        age,
    } = profile;

    const errors: ValidateProfileError[] = [];
    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    return errors;
};
