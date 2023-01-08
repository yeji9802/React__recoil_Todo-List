import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "./todoStore";

const TodoItem = (props) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const { todo, idx } = props;

  const handleChange = (e) => {
    setEditText(e.target.value);
  }
  
  const handleClick = () => {
    const copied = [...todos];
    copied.splice(idx, 1, editText);
    setTodos(copied);
    setEdit(false)
  }
  
  const handleEdit = () => {
    setEdit(true);
    setEditText(todo);
  };
  
  const handleRemove = () => {
    console.log(idx)
    const copied = [...todos];
    copied.splice(idx, 1)
    setTodos(copied);
  }

  return (
    <li>
      <input type="checkbox" />
      {edit ? (
        <input onChange={handleChange} type="text" value={editText} />
      ) : (
        <span>{todo}</span>
      )}
      {edit ? (
        <button onClick={handleClick}>확인</button>
      ) : (
        <button onClick={handleEdit}>수정</button>
      )}
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
};

export default TodoItem;
