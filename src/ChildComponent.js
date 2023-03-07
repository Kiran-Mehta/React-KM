import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './reducers/CountReducer'

export default function ChilDComponent() {
 
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="">
     
      <button  onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button  onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
