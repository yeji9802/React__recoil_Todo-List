import React from "react";
import { RecoilRoot } from "recoil";
import TodoInput from "./common/TodoInput";
import TodoList from "./common/TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoInput />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
