import { useSelector, useDispatch } from 'react-redux';   // to extract data 4m store.
import classes from './Counter.module.scss';
import { counterActions } from '../reducers/counterSlice';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
    <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
   { show === true &&<div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 5</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
