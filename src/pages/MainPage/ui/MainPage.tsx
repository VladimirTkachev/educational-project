import { BugButton } from 'App/providers/ErroBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
      <Input
        value={value}
        placeholder={t('Введите текст')}
        onChange={setValue}
      />
    </div>
  );
};

export default MainPage;
