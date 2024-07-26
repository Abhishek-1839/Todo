import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import Filter from './Filter';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Array to store todo items
  const [filter, setFilter] = useState('All');

  const addTodo = (text,desc) => {
    const newTodo = {
      id: Date.now(), // Unique identifier
      text,
      desc,
      isCompleted : false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id, status) => {
    setTodos(
      todos.map((todo) => 
        (todo.id === id ? { ...todo, isCompleted: status } : todo))
    );
  };

  const updateTodo = (id, text, desc) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text, desc } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Completed') return todo.isCompleted;
    if (filter === 'Not Completed') return !todo.isCompleted;
    return true;
  });


  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <ul style={{listStyle : "none", display:'flex'}}>      
        {filteredTodos.map((todo) => (
           <div className="card" key={todo.id}>
          <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          </div>
        ))} 
      </ul>
    </div>
  );
};

export default TodoList;
