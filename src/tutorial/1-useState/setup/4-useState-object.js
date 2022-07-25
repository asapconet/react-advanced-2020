import React, { useState } from "react";

const UseStateObject = () => {
  //   const [them, setThem] = useState({
  //     name: 'johnson',
  //     age: 33,
  //     occupation: 'welder',
  //   });

  const [name, setName] = useState("markills");
  const [age, setAge] = useState(37);
  const [occupation, setOccupation] = useState("random massage");

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{occupation}</h3>
    </>
  );
};

export default UseStateObject;
