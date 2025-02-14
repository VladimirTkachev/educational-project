import {
  CSSProperties, FC, memo, useMemo,
} from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const AvatarContainer: FC<AvatarProps> = (props) => {
  const {
    className, src, size = 100, alt,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      className={cn(cls.Avatar, {}, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};

export const Avatar = memo(AvatarContainer);

Avatar.displayName = 'Avatar';
