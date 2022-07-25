import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);

  const theListener = () => {
    setValue(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", theListener);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", theListener);
    };
  }, []);
  console.log("rerender");
  return (
    <>
      <h1>Window</h1>
      <h2>{value}px</h2>
    </>
  );
};

export default UseEffectCleanup;
