import React from 'react';
import { useState, useRef } from 'react';
import '../style/commentStyle.css';
export default function Comment() {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');
  const submitBtnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment explaining why the exp was poor');
      return;
    }
    console.log('Form submitted!');
    submitBtnRef.current.disabled = true;
    setComment('');
    setScore('10');
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className='Field'>
            <label>Score: {score}⭐</label>
            <input
              type='range'
              min='0'
              max='10'
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button ref={submitBtnRef} type='submit'>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
