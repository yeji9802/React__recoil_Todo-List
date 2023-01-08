import React from "react";
import { RecoilRoot } from "recoil";
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
