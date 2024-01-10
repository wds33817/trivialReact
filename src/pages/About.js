import React, { Fragment, useState } from 'react';

export default function About() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => handleDelete(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
