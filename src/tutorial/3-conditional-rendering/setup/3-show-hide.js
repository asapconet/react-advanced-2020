import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [value, setValue] = useState(window.innerWidth);

  const theSize = (value) => {
    setValue(window.innerWidth);
  };
  useEffect((value) => {
    window.addEventListener("resize", theSize);
    return () => {
      window.removeEventListener("resize", theSize);
    };
  }, []);

  return (
    <div>
      <h1>window</h1>
      <h3>size; {value} px</h3>
    </div>
  );
};

export default ShowHide;
