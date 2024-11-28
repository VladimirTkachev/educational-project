import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFountPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFountPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
