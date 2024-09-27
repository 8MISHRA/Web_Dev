import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTask }) => (
  <li>
    <span
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => toggleTask(task.id)}
    >
      {task.name}
    </span>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </li>
);

export default TaskItem;
