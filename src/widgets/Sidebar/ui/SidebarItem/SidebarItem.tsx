import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './SidebarItem.module.scss';
import { SideBarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SideBarItemType
  collapsed: boolean;
}

const SidebarItemContainer: FC<SidebarItemProps> = (props) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={cn(cls.item, { [cls.collapsed]: collapsed })}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
};

export const SidebarItem = memo(SidebarItemContainer);
SidebarItem.displayName = 'SidebarItem';
