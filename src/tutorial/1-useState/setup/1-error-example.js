import React from "react";

const ErrorExample = () => {
  let title = "random tile";

  const theclick = () => {
    let title = "we got it  right";
    console.log("hello moskis");
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={theclick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
