import React, {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'App/providers/ThemeProvider';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const { theme } = useTheme();

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: closing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleEscPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscPress);
    }

    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [handleEscPress, isOpen]);

  return (
    <Portal>
      <div className={cn(cls.Modal, mods, [className, cls[theme]])}>
        <div
          className={cls.overlay}
          onClick={handleClose}
        >
          <div
            className={cn(cls.content)}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};