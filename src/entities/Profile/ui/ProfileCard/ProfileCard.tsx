import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  readOnly?: boolean;
  error?: string;
  onFirstnameChange?: (value?: string) => void;
  onLastnameChange?: (value?: string) => void;
  onAgeChange?: (value?: string) => void;
  onCityChange?: (value?: string) => void;
  onUsernameChange?: (value?: string) => void;
  onAvatarChange?: (value?: string) => void;
  onCurrencyChange?: (value: Currency) => void;
  onCountryChange?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readOnly,
    onFirstnameChange,
    onLastnameChange,
    onAgeChange,
    onCityChange,
    onUsernameChange,
    onAvatarChange,
    onCountryChange,
    onCurrencyChange,
  } = props;
  const { t } = useTranslation('profile');

  const Content = useMemo(() => {
    if (isLoading) {
      return (
        <Loader />
      );
    }

    if (error) {
      return (
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      );
    }

    return (
      <div className={cls.profile}>
        {Boolean(data?.avatar) && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          onChange={onFirstnameChange}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          onChange={onLastnameChange}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш вотраст')}
          onChange={onAgeChange}
          readOnly={readOnly}
          type="number"
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          onChange={onCityChange}
          readOnly={readOnly}
        />
        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          onChange={onUsernameChange}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          onChange={onAvatarChange}
          readOnly={readOnly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onCurrencyChange}
          readOnly={readOnly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onCountryChange}
          readOnly={readOnly}
        />
      </div>
    );
  }, [
    data?.age,
    data?.city,
    data?.firstname,
    data?.lastname,
    error, isLoading,
    data?.username,
    data?.avatar,
    data?.currency,
    data?.country,
    onAgeChange,
    onCityChange,
    onFirstnameChange,
    onLastnameChange,
    onUsernameChange,
    onAvatarChange,
    onCurrencyChange,
    onCountryChange,
    readOnly,
    t,
  ]);

  return (
    <div className={cn(
      cls.ProfileCard,
      {
        [cls.loading]: isLoading,
        [cls.error]: Boolean(error),
        [cls.editing]: !readOnly,
      },
      [className],
    )}
    >
      {Content}
    </div>
  );
};
