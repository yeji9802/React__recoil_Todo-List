import React from "react";
import { useRecoilState } from "recoil";
import { inputState, todosState } from "./todoStore";
import styles from "./TodoInput.module.css";

const TodoInput = () => {
  const [text, setText] = useRecoilState(inputState);
  const [todos, setTodos] = useRecoilState(todosState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    setTodos([...todos, { text: text, completed: false}]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAllRemove = () => {
    setTodos([]);
  };

  let todosCount = todos.filter((todo) => todo.text).length;

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.InputArea}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className={styles.InputArea__input}
        />
        <button
          type="submit"
          className={
            !text
              ? `${styles.button} ${styles.deactivationButton}`
              : styles.button
          }
        >
          추가
        </button>
      </form>
      <button
        onClick={handleAllRemove}
        className={
          !todosCount
            ? `${styles.button} ${styles.allRemoveButton} ${styles.deactivationButton}`
            : `${styles.button} ${styles.allRemoveButton}`
        }
      >
        전체 삭제
      </button>
    </section>
  );
};

export default TodoInput;
