import React, { Fragment, useState } from 'react';
import { TaskList } from './TaskList';
import Heading from './Heading';
import FileComponent from './fileComponent';
function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Go shopping', done: true },
    { id: 2, task: 'Wash dishes', done: false },
  ]);

  const [isHello, setWord] = useState(true);
  const word = isHello ? 'Hello' : 'World';

  const [word1, setWord1] = useState('Eat');

  function handleClick() {
    setWord1('Drink');
  }

  return (
    <Fragment>
      <div>
        <TaskList tasks={tasks} />
      </div>
      <h1>A state value: {word}</h1>
      <button onClick={() => setWord(!isHello)}>Change Word</button>
      <hr></hr>
      <Heading message={word1 + ' at little lemon'} />
      <button onClick={handleClick}>Click to Change</button>
      <FileComponent />
    </Fragment>
  );
}

export default Task;
