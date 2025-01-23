import { FC, memo } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const TextContainer: FC<TextProps> = (props) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={cn(cls.Text, {}, [className, cls[theme]])}>
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
