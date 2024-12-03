import { BugButton } from 'App/providers/ErroBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>
  );
};

export default MainPage;
