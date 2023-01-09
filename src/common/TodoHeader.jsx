import React from 'react';
import { useRecoilState } from "recoil";
import { todosState } from "./todoStore";
import styles from "./TodoHeader.module.css";

const TodoHeader = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  let count = todos.filter((todo) => !todo.completed).length;

  return (
    <header className={styles.container}>
      <h1>
        <mark className={styles.todoCount}>{count}</mark>개의 할 일
      </h1>
    </header>
  );
};

export default TodoHeader;