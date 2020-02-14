import React , { useReducer } from 'react';
import { Button } from './Button';

export default function App() {
    return (
        <div className="container text-center pt-5">
              <UseReducerEx />
    </div>
  );
}



const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <Button
        label="increment"
        counterFn={() => dispatch({ type: INCREMENT, payload: 3 })}
      />
      <h1>{state.count}</h1>
      <Button label="decrement" counterFn={() => dispatch({ type: DECREMENT })} />
    </div>
  );
};

//export default UseReducerEx;