import React from "react";
import { RecoilRoot } from "recoil";
import TodoHeader from "./common/TodoHeader";
import TodoInput from "./common/TodoInput";
import TodoList from "./common/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoHeader />
      <TodoInput />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
