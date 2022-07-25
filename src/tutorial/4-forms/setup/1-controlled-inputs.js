import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const enteredValue = (z) => {
    z.preventDefault();
    if (firstName && lastName && email) {
      const profile = {
        id: new Date().getTime().toString,
        firstName,
        lastName,
        email,
      };
      setUsers((users) => {
        return [...users, profile];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
    } else {
      console.log("incomplete/empty entry made");
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">First-Name: </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(z) => setFirstName(z.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last-Name: </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(z) => setLastName(z.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(z) => setEmail(z.target.value)}
            ></input>
          </div>
          <button type="submit" onClick={enteredValue}>
            add user
          </button>
        </form>
        {users.map((them, index) => {
          const { id, firstName, lastName, email } = them;
          return (
            <div className="item" key={id}>
              <h4>
                {firstName} {lastName}
              </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
