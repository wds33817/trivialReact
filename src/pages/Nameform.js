import React, { useState } from 'react';

function Nameform() {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    console.log('Form submitted!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          value={name}
          placeholder='Name'
          name='name'
          onChange={(e) => setName(e.target.value)}
        ></input>
      </fieldset>
      <button disabled={!name} type='submit'>
        Submit
      </button>
    </form>
  );
}

export default Nameform;
