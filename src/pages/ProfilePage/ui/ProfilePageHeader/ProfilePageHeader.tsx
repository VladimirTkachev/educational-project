import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const profileReadonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleFormSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cn(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      <div className={cls.wrp}>
        <Button
          theme={profileReadonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_WARNING}
          className={cls.edit}
          onClick={profileReadonly ? handleEdit : handleCancelEdit}
        >
          {t(profileReadonly ? 'Редактировать' : 'Отменить')}
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.save}
          disabled={profileReadonly}
          onClick={handleFormSave}
        >
          {t('Сохранить')}
        </Button>
      </div>
    </div>
  );
};
