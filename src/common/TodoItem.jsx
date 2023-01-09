import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "./todoStore";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const { todo, idx } = props;

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleClick = () => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1, {...todo, text: editText});
    setTodos(copiedTodos);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
    setEditText(todo.text);
  };

  const handleRemove = () => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1);
    setTodos(copiedTodos);
  };

  const handlecompleted = (e) => {
    const copiedTodos = [...todos];
    copiedTodos.splice(idx, 1, { ...todo, completed: e.target.checked });
    setTodos(copiedTodos);
  };

  return (
    <li className={styles.listItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handlecompleted}
      />
      {edit ? (
        <input
          onChange={handleChange}
          type="text"
          value={editText}
          className={`${styles.textArea} ${styles.editInput}`}
        />
      ) : (
        <span
          className={`${
            !todo.completed
              ? styles.textArea
              : `${styles.textArea} ${styles.textCompletion}`
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className={styles.buttonArea}>
        {edit ? (
          <button onClick={handleClick} className={styles.button}>
            확인
          </button>
        ) : (
          <button onClick={handleEdit} className={styles.button}>
            수정
          </button>
        )}
        <button onClick={handleRemove} className={styles.button}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
