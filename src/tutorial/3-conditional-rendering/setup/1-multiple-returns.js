import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((reply) => {
        if (reply.status >= 200 && reply.status <= 299) {
          return reply.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(reply.statusText);
        }
      })
      .then((value) => {
        const { login } = value;
        setValue(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>isLoading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>isError</h1>
      </div>
    );
  }
  if (value) {
    return (
      <div>
        <h1>{value}</h1>
      </div>
    );
  }
};
export default MultipleReturns;
