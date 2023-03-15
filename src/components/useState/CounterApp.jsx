import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  console.log(state.counter1 + " " + state.counter2);

  let incrementUnit = () => {
    return setState({
      ...state,
      counter1: state.counter1 + 1,
      counter2: state.counter2 + 1
    })
  }

  return (
    <>
      <h1>Counter1: {state.counter1} </h1>
      <h1>Counter2: {state.counter2} </h1>
      <h1>Counter3: {state.counter3} </h1>
      <h1>Counter4: {state.counter4} </h1>
      <h1>Counter5: {state.counter5} </h1>
      <hr />

      <button className="btn btn-primary" onClick={incrementUnit}>+1</button>
    </>
  );
};
