import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcherContainer: FC<LangSwitcherProps> = (props) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      className={cn('', {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={toggleLanguage}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};

export const LangSwitcher = memo(LangSwitcherContainer);
