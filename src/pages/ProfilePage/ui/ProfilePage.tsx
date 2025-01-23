import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  useDynamicModuleLoader(initialReducers, true);

  return (
    <div>
      {t('СТРАНИЦА ПРОФИЛЯ')}
    </div>
  );
};

export default ProfilePage;
