import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [values, setValues] = useState([]);

  const getValues = async () => {
    const reply = await fetch(url);
    const values = await reply.json();
    setValues(values);
    // console.log(values)
  };

  useEffect(() => {
    getValues();
  }, []);

  return (
    <>
      <h3>github users </h3>
      <ul className="users">
        {values.map((users) => {
          const { id, login, avatar_url, html_url } = users;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
