import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

const Options = [
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.Belarus,
    content: Country.Belarus,
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan,
  },
  {
    value: Country.Armenia,
    content: Country.Armenia,
  },
];

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readOnly?: boolean;
  onChange?: (value: Country) => void;
}

const CountrySelectContainer: FC<CountrySelectProps> = (props) => {
  const {
    className, value, readOnly, onChange,
  } = props;
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={cn('', {}, [className])}
      label={t('Укажите страну')}
      options={Options}
      value={value}
      readOnly={readOnly}
      onChange={handleChange}
    />
  );
};

export const CountrySelect = memo(CountrySelectContainer);

CountrySelect.displayName = 'CountrySelect';
