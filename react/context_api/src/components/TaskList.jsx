import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTask }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    ))}
  </ul>
);

export default TaskList;
