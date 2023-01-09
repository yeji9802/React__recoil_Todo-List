import React from "react";
import { useRecoilState } from "recoil";
import { inputState, todosState } from "./todoStore";
import styles from "./TodoInput.module.css";

const TodoInput = () => {
  const [text, setText] = useRecoilState(inputState);
  const [todos, setTodos] = useRecoilState(todosState);

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleClick = () => {
    if (!text) {
      return;
    }
    setTodos([...todos, text]);
    setText("");
  };

  const handleAllRemove = () => {
    setTodos([]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.InputArea}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className={styles.InputArea__input}
        />
        <button
          onClick={handleClick}
          className={
            !text
              ? `${styles.button} ${styles.deactivationButton}`
              : styles.button
          }
        >
          추가
        </button>
      </div>
      <button
        onClick={handleAllRemove}
        className={`${styles.button} ${styles.allRemoveButton}`}
      >
        전체 삭제
      </button>
    </section>
  );
};

export default TodoInput;
