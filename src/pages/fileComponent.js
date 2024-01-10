import React, { useRef } from 'react';

function FileComponent() {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileInput.current.files;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={fileInput} type='file' />
    </form>
  );
}

export default FileComponent;
