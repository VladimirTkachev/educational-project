import React from 'react';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import MainPageIcon from 'shared/assets/icons/home-page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page.svg';

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainPageIcon,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: AboutPageIcon,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: ProfilePageIcon,
    text: 'Профиль',
    authOnly: true,
  },
];
