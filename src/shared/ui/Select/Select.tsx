import {
  ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export type SelectOption = {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const SelectContainer: FC<SelectProps> = (props) => {
  const {
    className,
    label,
    value,
    options,
    readOnly,
    onChange,
  } = props;

  const Options = useMemo(() => options?.map((opt) => (
    <option
      key={opt.value}
      className={cls.option}
    >
      {opt.content}
    </option>
  )), [options]);

  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e?.target?.value);
  }, [onChange]);

  return (
    <div className={cn(cls.Select, {}, [className])}>
      {Boolean(label) && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        disabled={readOnly}
        onChange={handleChange}
      >
        {Options}
      </select>
    </div>
  );
};

export const Select = memo(SelectContainer);

Select.displayName = 'Select';
