import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleIsOpenToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <Button
        className={cn(cls.links)}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleIsOpenToggle}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleIsOpenToggle}
      >
        {/* eslint-disable max-len */}
        {t('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, labore porro! Ullam veritatis distinctio magnam odit earum sapiente quas esse!')}
      </Modal>
    </div>
  );
};
