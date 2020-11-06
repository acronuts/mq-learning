import React, { useState, useEffect} from "react"; 



import { useReducer } from "react";

/*
* => The useReducer hook is usually preferable to useState when you have complex state logic
* => that includes multiple values, or when the next state depends on the previous one.
* => useReducer also allows you to optimize the performance of components that trigger deep updates, 
* => since you can pass dispatch instead of callbacks.
* => React ensures that the identity of the dispatch function is stable and does not change with repeated renders.
* => Therefore, it can be safely omitted from the useEffect and useCallback hook dependency lists.
* => If you return the same value from the hook reducer as the current state,
* => React will exit without redrawing the children or triggering effects. (React uses the Object.is comparison algorithm.)
* => If you do expensive calculations during rendering, you can optimize them with useMemo
* => source: https://en.reactjs.org/docs/hooks-reference.html#usereducer

*/

const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}