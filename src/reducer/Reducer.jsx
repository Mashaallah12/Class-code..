import React, { useReducer } from 'react'

let initalState = 0;
function reducerFunc(state, action) {
    console.log(state, action);
    
    switch (action) {
        case "increment":
            
        return    state + 1;

        case "decrement":
            return  state -1;

        case "reset":
            return 0;
    }

}

const Reducer = () => {
    let [state, dispatch] = useReducer(reducerFunc, initalState);
  return (
    <div>
      <h1>learn useReducer</h1>
      <h2>counter : {state}</h2>
      <button onClick={ ()=> dispatch("increment") }>Increment</button>
      <button onClick={ ()=> dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Reducer
