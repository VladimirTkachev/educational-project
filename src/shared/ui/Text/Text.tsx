import { FC, memo } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGTH = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

const TextContainer: FC<TextProps> = (props) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div className={cn(cls.Text, {}, [className, cls[theme], cls[align]])}>
      {title && (
        <p className={cn(cls.title)}>
          {title}
        </p>
      )}
      {text && (
        <p className={cn(cls.text)}>
          {text}
        </p>
      )}
    </div>
  );
};

export const Text = memo(TextContainer);
