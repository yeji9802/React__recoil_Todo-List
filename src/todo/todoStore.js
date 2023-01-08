import { atom } from "recoil";

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const todosState = atom({
  key: "todosState",
  default: [],
});