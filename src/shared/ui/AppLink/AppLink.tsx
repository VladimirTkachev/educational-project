import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLinkContainer: FC<AppLinkProps> = (props) => {
  const {
    className, children, theme = AppLinkTheme.PRIMARY, ...restProps
  } = props;

  return (
    <Link
      className={cn(cls.AppLink, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export const AppLink = memo(AppLinkContainer);
