import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal}) => {
  useEffect(()=> {
    setTimeout(()=> {
      closeModal()
    }, 2000)
  })
  return <div className='modal'>
    <h4>{modalContent}</h4>
  </div>;
};

export default Modal;
