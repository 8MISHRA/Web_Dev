import React, { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import ThemeProvider from './context/ThemeProvider';
import ThemeContext from './context/ThemeContext';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={`app ${theme}`}>
            <Header />
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
