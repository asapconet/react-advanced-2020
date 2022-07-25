import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const takeOut = (id) => {
    let newPeople = people.filter((them) => them.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((them) => {
        const { id, name } = them;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => takeOut(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Remove all text
      </button>
    </>
  );
};

export default UseStateArray;
