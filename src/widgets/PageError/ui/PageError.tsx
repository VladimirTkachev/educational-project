import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={cn(cls.PageError, {}, [className])}>
      <p>{t('Что то пошло не так... >:(')}</p>
      <Button onClick={handleRefresh}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
