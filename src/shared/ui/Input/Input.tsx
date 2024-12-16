import {
  ChangeEvent, FC, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLImputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLImputProps {
  className?: string;
  value?: string;
  autoFocus?: boolean;
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
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [carriage, setCarriage] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

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
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          onChange={handleInputChange}
          {...restProps}
        />
        {focused && (
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
