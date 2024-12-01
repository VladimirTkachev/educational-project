import { FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cn(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};
