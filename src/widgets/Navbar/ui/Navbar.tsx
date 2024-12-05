import { FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cn(cls.links)}>
        /
      </div>
    </div>
  );
};
