import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <div>
        <h1>{text || <h1>Peter Pipper</h1>}</h1>
        <button className="btn" onClick={() => setIsError(!isError)}>
          toogle error
        </button>
        <div>
          {isError && <h2>Error...</h2>}
          {isError ? (
            <h4>you pressed the wrong button try again</h4>
          ) : (
            <h5>All is working well!!!</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default ShortCircuit;
