import React, { Fragment } from 'react';

export function TaskList(props) {
  return (
    <Fragment>
      {props.tasks.map((task) => {
        return (
          <div key={task.id}>
            <h2>ID: {task.id}</h2>
            <h1>Task: {task.task}</h1>
            <h2>Done: {task.done.toString()}</h2>
          </div>
        );
      })}
    </Fragment>
  );
}
