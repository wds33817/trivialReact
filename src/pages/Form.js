import React, { useRef } from 'react';
import '../style/formStyle.css';
import Nameform from './Nameform';
// uncontrolled inputs
export default function Form() {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' />
      <button type='submit'>Submit</button>
      <Nameform />
    </form>
  );
}
