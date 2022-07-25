import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import {reducer} from './reducer'


const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (z) => {
    z.preventDefault();
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEMS", payload: newPeople });
      setName('')
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLEAR_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(z) => setName(z.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add user</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "CLEAR_ITEM", payload: person.id })
              }
            >
              pull out
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
