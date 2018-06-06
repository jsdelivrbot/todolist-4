import React from 'react';

const Todo = ({ text, completed, onClickToggle, onClickDelete }) => {
  const style = completed ? 'line-through' : 'none';
  return (
    <li>
      <span 
        style={ {textDecoration: style }}
        onClick={onClickToggle}>
          {text}
      </span>
      <span onClick={onClickDelete}> <b>x</b> </span>
    </li>
  );
}

export default Todo;