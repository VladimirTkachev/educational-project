import { ButtonHTMLAttributes, FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, theme, children, ...restProps
  } = props;

  return (
    <button type="button" className={cn(cls.Button, {}, [className, cls[theme]])} {...restProps}>
      {children}
    </button>
  );
};
