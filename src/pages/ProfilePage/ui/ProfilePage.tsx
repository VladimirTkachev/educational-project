import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';

import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
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

  useDynamicModuleLoader(initialReducers, true);

  useEffect(() => {
    dispatch(fetchProfileData());
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

  return (
    <div>
      <ProfilePageHeader />
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
