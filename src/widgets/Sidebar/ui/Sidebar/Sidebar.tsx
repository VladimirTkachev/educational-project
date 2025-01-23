import {
  FC, memo, useMemo, useState,
} from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

const SidebarContainer: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const Links = useMemo(() => SidebarItemsList.map((it) => (
    <SidebarItem
      key={it.path}
      item={it}
      collapsed={collapsed}
    />
  )), [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={toggleCollapsed}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {Links}
      </div>
      <div className={cn(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};

export const Sidebar = memo(SidebarContainer);
