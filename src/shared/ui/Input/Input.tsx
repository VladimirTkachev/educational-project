import {
  ChangeEvent, FC, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLImputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLImputProps {
  className?: string;
  value?: string | number;
  autoFocus?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const CHAR_WIDTH = 9;

const InputComponent: FC<InputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [carriage, setCarriage] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasCaret = focused && !readOnly;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target?.value);
    setCarriage(e.target?.value?.length);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    if (e.target instanceof HTMLInputElement) {
      setCarriage(e?.target?.selectionStart ?? 0);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      setFocused(() => true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={cn(cls.Input, {
      [cls.readonly]: readOnly,
    }, [className])}
    >
      {Boolean(placeholder) && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.wrapper}>
        <input
          ref={inputRef}
          type={type}
          className={cls.textInput}
          value={value}
          readOnly={readOnly}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          onChange={handleInputChange}
          {...restProps}
        />
        {hasCaret && (
          <span
            className={cls.carriage}
            style={{
              left: `${carriage * CHAR_WIDTH}px`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export const Input = memo(InputComponent);

Input.displayName = 'Input';
