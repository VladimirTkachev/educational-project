import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import MainPageIcon from 'shared/assets/icons/home-page.svg';

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
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.main}
        >
          <MainPageIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.about}
        >
          <AboutPageIcon className={cls.icon} />
          <span className={cls.link}>
            {t('О сайте')}
          </span>
        </AppLink>
      </div>
      <div className={cn(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
