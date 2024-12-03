import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button data-testid="sidebar-toggle" type="button" onClick={toggleCollapsed}>
        {t('Toggle')}
      </Button>
      <div className={cn(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
