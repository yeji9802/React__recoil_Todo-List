import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from './todoStore';

const TodoInput = () => {
  const [todo, setTodo] = useRecoilState(todoState);

  const onChange = (e) => {
    setTodo(e.target.value)
    console.log(todo)
  }


  return (
    <div>
      <input type="text" value={todo} onChange={onChange}/>
      <button>추가</button>
    </div>
  );
};

export default TodoInput;