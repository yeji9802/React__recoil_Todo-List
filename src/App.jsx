import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { CharacterCounter } from "./CharacterCounter";
import TodoInput from "./todo/TodoInput";
import TodoList from "./todo/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoInput />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
