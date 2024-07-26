import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleChanges = (event) => {
    setDesc(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() && desc.trim()) { // Check for empty text
      addTodo(text,desc);
      setText('');
      setDesc('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="Add Todo" />
      <input type="text" value={desc} onChange={handleChanges} placeholder="Add Todo Description" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;