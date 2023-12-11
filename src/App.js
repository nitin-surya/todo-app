 import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
       <TodoList />
    </div>
  );
};

export default App;
