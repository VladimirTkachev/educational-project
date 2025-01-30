import {
  getProfileData, getProfileError, getProfileLoading,
} from 'entities/Profile/model/selectors/getProfile/getProfile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);
  const profileLoading = useSelector(getProfileLoading);
  const profileError = useSelector(getProfileError);

  return (
    <div className={cn(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.edit}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.profile}>
        <Input
          value={profileData?.firstname}
          placeholder={t('Ваше имя')}
        />
        <Input
          value={profileData?.lastname}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  );
};
