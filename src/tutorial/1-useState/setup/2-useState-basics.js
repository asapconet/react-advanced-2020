import React, { useState } from "react";

const UseStateBasics = () => {
  const [state, setState] = useState("Random things only");

  const theClick = () => {
    if (state === "Random things only") {
      setState("hello moskis");
    } else if (state === "hello moskis") {
      setState("what what");
    } else {
      setState("change no more thank you!!");
    }
  };

  return (
    <React.Fragment>
      <h1>{state}</h1>
      <button type="button" className="btn" onClick={theClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
