import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const formHandler = useRef(null);
  const divContainer = useRef(null);

  const submitHandler = (z) => {
    z.preventDefault();
    console.log(formHandler.current.value);
  };

  useEffect(() => {
    console.log(formHandler.current);
    formHandler.current.focus();
    divContainer.current.focus();
    console.log(divContainer.current);
  });

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" ref={formHandler}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}>
        This useref shows the content of the referenced destination as shown in
        my console for now (can be displayed in a physical working space
      </div>
    </>
  );
};

export default UseRefBasics;
