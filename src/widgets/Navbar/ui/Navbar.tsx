import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <Button
        className={cn(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handModalOpen}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isOpen}
        onClose={handModalClose}
      />
    </div>
  );
};
