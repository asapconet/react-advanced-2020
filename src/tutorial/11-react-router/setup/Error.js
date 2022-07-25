import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/' className='btn'> Return Home </Link>
      
    </div>
  );
};

export default Error;
