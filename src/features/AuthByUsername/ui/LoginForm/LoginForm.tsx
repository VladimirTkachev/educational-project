import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginFormContaider: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    password, username, error, isLoading,
  } = useSelector(getLoginState);

  const handleUsernameChange = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handlePasswordChange = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const hadndleSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={cn(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          title={t(error)}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        className={cls.input}
        placeholder={t('Введите имя')}
        autoFocus
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        className={cls.input}
        placeholder={t('Введите пароль')}
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        className={cls.btn}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        onClick={hadndleSubmit}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

export const LoginForm = memo(LoginFormContaider);

LoginForm.displayName = 'LoginForm';
