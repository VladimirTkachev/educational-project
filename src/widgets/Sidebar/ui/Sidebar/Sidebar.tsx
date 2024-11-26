import { FC, useState } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={toggleCollapsed}>Toggle</button>
      <div className={cn(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
