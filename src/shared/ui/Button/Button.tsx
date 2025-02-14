import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_WARNING = 'outlineWarning',
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

const ButtonContainer: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    security,
    square,
    size = ButtonSize.M,
    // disabled,
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

export const Button = memo(ButtonContainer);
