import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfile } from './validateProfile';

const data = {
  username: 'admin',
  age: 42,
  country: Country.Belarus,
  lastname: 'test',
  firstname: 'asd',
  city: 'test',
  currency: Currency.RUB,
};

describe('validateProfile.test', () => {
  test('success', () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });
  test('without data', () => {
    const result = validateProfile();

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
  test('without first or/and last name', () => {
    const result = validateProfile({ ...data, firstname: undefined, lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test('without age', () => {
    const result = validateProfile({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test('without country', () => {
    const result = validateProfile({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
  test('without all required fields', () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
