import React from 'react';
import { useRecoilState } from 'recoil';
import { inputState, todosState } from './todoStore';

const TodoInput = () => {
  const [text, setText] = useRecoilState(inputState);
  const [todos, setTodos] = useRecoilState(todosState)

  const onChange = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  const handleClick = () => {
    if (!text) {
      return;
    }
    setTodos([...todos, text])
    setText("")
  }

  const handleAllRemove = () => {
    setTodos([])
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={handleClick}>추가</button>
      <div>
        <button onClick={handleAllRemove}>전체 삭제</button>
      </div>
    </div>
  );
};

export default TodoInput;