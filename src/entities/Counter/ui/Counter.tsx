import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { decrement, increment } = counterActions;
  const { t } = useTranslation();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{`value = ${counterValue}`}</h1>
      <Button
        data-testid="increment-btn"
        onClick={handleIncrement}
      >
        {t('Увеличить')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={handleDecrement}
      >
        {t('Уменьшить')}
      </Button>
    </div>
  );
};
