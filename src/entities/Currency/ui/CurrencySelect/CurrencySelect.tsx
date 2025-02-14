import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

const Options = [
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readOnly?: boolean;
  onChange?: (value: Currency) => void;
}

const CurrencySelectContainer: FC<CurrencySelectProps> = (props) => {
  const {
    className, value, readOnly, onChange,
  } = props;
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={cn('', {}, [className])}
      label={t('Укажите валюту')}
      options={Options}
      value={value}
      readOnly={readOnly}
      onChange={handleChange}
    />
  );
};

export const CurrencySelect = memo(CurrencySelectContainer);

CurrencySelect.displayName = 'CurrencySelect';
