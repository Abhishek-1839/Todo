import React, { useState } from 'react';

const TodoItem = ({ todo, completeTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDesc, setEditDesc] = useState(todo.desc);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, editText, editDesc);
    setIsEditing(false);
  }

  const handleStatusChange = (event) => {
    const newStatus = event.target.value === 'Completed';
    completeTodo(todo.id, newStatus);
  }



  return (
    <li>
      {isEditing ? (
        <>
        <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
        <input type="text" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
        <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
        <p>Name : {todo.text}</p>
        <p>Description: {todo.desc}</p>
        <p>Status:</p>
        <select value={todo.isCompleted ? 'Completed' : 'Not Completed'} onChange={handleStatusChange}>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
        </select>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
