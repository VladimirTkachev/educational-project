import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, useCallback, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    handModalClose();
    dispatch(userActions.removeUserDate());
  }, [dispatch, handModalClose]);

  const Content = useMemo(() => {
    if (authData) {
      return (

        <Button
          className={cn(cls.links)}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogout}
        >
          {t('Выйти')}
        </Button>
      );
    }

    return (
      <>
        <Button
          className={cn(cls.links)}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handModalOpen}
        >
          {t('Войти')}
        </Button>
        {isOpen && (
          <LoginModal
            isOpen={isOpen}
            onClose={handModalClose}
          />
        )}
      </>
    );
  }, [authData, handModalClose, handModalOpen, handleLogout, isOpen, t]);

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      {Content}
    </div>
  );
};
