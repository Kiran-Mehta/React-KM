import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './reducers/CountReducer'

export default function ChilDComponent() {
 const handleCallback = (state )=> {
  return state.counter.count
 }
  const count = useSelector(handleCallback); // collecting / receiving
  const dispatch = useDispatch();

  const increment = () =>{
    
  }

  return (
    <div className="">

<button  onClick={ dispatch(increment() )}>
      {/* <button  onClick={() => dispatch(increment())}> */}
        Increment
      </button>
      <span>{count}</span>
      <button  onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
