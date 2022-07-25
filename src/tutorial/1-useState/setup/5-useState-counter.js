import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const startOver = (values) => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1)
      setValue((oldValue) => {
        return oldValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase likes
        </button>
        <button className="btn" onClick={startOver}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease likes
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase likes
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
