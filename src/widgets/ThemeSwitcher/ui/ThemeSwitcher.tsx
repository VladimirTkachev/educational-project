import { FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from './ThemeSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cn(cls['ThemeSwitcher'], {}, [className, cls[theme]])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
};
