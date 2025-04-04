import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <div data-testid="value-title">
                {value}
            </div>
            <Button
                data-testid="increment-btn"
                onClick={() => increment()}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={() => decrement()}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
