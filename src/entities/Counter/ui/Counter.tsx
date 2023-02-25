/* eslint-disable i18next/no-literal-string */
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions, counterReducer } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.incremented());
    };
    const decrement = () => {
        dispatch(counterActions.decremented());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                value
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>increment</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
        </div>
    );
};
