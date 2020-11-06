import React, { useState, useEffect} from "react"; 


export const WorkshopSearch = () => ({
  type: 'WORKSHOPS_FILTER',
  payload: workshop
})

const initialState = {

}

import { useReducer } from "react";

/*
* => Lazy initialization
* => You can also create an initial state lazily. To do this,
* => you can pass the init function as the third argument.
* => The initial state will be set equal to the result of calling init (initialArg).
* => This allows you to extract the logic for calculating the initial state outside the reducer. 
* => It is also convenient for resetting later in response to an action.
* => source: https://en.reactjs.org/docs/hooks-reference.html#useReducer
*/

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}


