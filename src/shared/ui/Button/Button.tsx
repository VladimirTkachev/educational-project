import { ButtonHTMLAttributes, FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    security,
    square,
    size = ButtonSize.M,
    ...restProps
  } = props;

  const modes = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={cn(cls.Button, modes, [className, cls[theme], cls[size]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
