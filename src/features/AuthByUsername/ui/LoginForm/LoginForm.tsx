import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import {
  getError, getIsLoading, getPassword, getUsername,
} from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginFormContaider: FC<LoginFormProps> = (props) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const password = useSelector(getPassword);
  const username = useSelector(getUsername);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useDynamicModuleLoader(initialReducers, true);

  const handleUsernameChange = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handlePasswordChange = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const hadndleSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);

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
export default LoginForm;

LoginForm.displayName = 'LoginForm';
