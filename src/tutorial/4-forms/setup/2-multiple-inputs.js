import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", age: "", email: "" });
  const [user, setUser] = useState([]);

  const peopleHandler = (z) => {
    const name = z.target.name;
    const value = z.target.value;
    setPerson({ ...person, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.email) {
      const newProfile = { ...person, id: new Date().getTime().toString() };
      setUser([...user, newProfile]);
      setPerson({ firstName: "", age: "", email: "" });
    } else {
      console.log("empty/inncomplete input");
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={peopleHandler}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={peopleHandler}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={peopleHandler}
            ></input>
          </div>
          <button type="submit" onClick={submitHandler}>
            add user
          </button>
        </form>
        {user.map((users, index) => {
          const { id, firstName, age, email } = users;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
