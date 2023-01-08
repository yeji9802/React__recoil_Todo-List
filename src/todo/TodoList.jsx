import React from 'react';
import { useRecoilState } from 'recoil';
import TodoItem from './TodoItem';
import { todosState } from './todoStore';

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState)

  return (
    <ul>
      {
        todos.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} idx={idx} />
        ))
      }
    </ul>
  );
};

export default TodoList;