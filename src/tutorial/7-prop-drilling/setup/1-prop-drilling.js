import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [guys, setGuys] = useState(data);

  const removeGuy = (id) => {
    setGuys((guys) => {
      return guys.filter((him) => him.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <SingleGuy guys={guys} removeGuy={removeGuy} />
    </section>
  );
};

const SingleGuy = ({ guys, removeGuy }) => {
  return (
    <>
      {guys.map((him) => {
        return <JustOneGuy key={him.id} {...him} removeGuy={removeGuy} />;
      })}
    </>
  );
};

const JustOneGuy = ({ id, name, removeGuy }) => {
  return (
    <div className="item" key={id}>
      <h4>{name}</h4>
      <button onClick={() => removeGuy(id)}>take-out</button>
    </div>
  );
};

export default PropDrilling;
