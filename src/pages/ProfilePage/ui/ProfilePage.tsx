import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const profileFormData = useSelector(getProfileForm);
  const profileLoading = useSelector(getProfileLoading);
  const profileError = useSelector(getProfileError);
  const profileReadonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorText = useMemo(() => ({
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.SERVER_ERROR]: t('Сереверная ошибка при сохранении'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  }), [t]);

  useDynamicModuleLoader(initialReducers, true);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const handleFirstnameChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value ?? '' }));
  }, [dispatch]);

  const handleLastnameChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
  }, [dispatch]);

  const handleAgeChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
  }, [dispatch]);

  const handleCityChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }));
  }, [dispatch]);

  const handleUsernameChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }));
  }, [dispatch]);

  const handleAvatarChange = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
  }, [dispatch]);

  const handleCurrencyChange = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleCountryChange = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  const ValidateErrors = useMemo(() => {
    if (!validateErrors?.length) {
      return null;
    }

    return validateErrors.map((err) => (
      <Text
        key={err}
        theme={TextTheme.ERROR}
        text={validateErrorText[err]}
      />
    ));
  }, [validateErrorText, validateErrors]);

  return (
    <div>
      <ProfilePageHeader />
      {ValidateErrors}
      <ProfileCard
        data={profileFormData}
        isLoading={profileLoading}
        error={profileError}
        readOnly={profileReadonly}
        onFirstnameChange={handleFirstnameChange}
        onLastnameChange={handleLastnameChange}
        onAgeChange={handleAgeChange}
        onCityChange={handleCityChange}
        onUsernameChange={handleUsernameChange}
        onAvatarChange={handleAvatarChange}
        onCurrencyChange={handleCurrencyChange}
        onCountryChange={handleCountryChange}
      />
    </div>
  );
};

export default ProfilePage;
