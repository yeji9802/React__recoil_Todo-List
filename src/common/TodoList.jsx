import React from "react";
import { useRecoilState } from "recoil";
import TodoItem from "./TodoItem";
import { todosState } from "./todoStore";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <ul className={styles.ulContainer}>
      {todos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} idx={idx} />
      ))}
    </ul>
  );
};

export default TodoList;
