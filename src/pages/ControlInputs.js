import React, { useState } from 'react';

export default function ControlInputs() {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form>
      <input value={value} onChange={handleChange} type='text' />
      <p>You just typed: {value}</p>
    </form>
  );
}
