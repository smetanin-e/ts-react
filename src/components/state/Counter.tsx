import React from 'react';
const initialState = { count: 0 };

type CounterState = {
  count: number;
};
//дискриминированные  объединения
type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};
type ResetAction = {
  type: 'reset';
};
type CounterAction = UpdateAction | ResetAction;

function reduser(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = React.useReducer(reduser, initialState);
  return (
    <div>
      count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })} className='btn'>
        +10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })} className='btn'>
        -10
      </button>
      <button onClick={() => dispatch({ type: 'reset' })} className='btn'>
        reset
      </button>
    </div>
  );
};

export default Counter;
