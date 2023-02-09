import { todoType } from "./type";
import { atom } from "recoil";

export const todoState = atom<todoType[]>({
  key: "weqweqwdsadsdasda",
  default: [],
});

export const todoInput = atom<string>({
  key: "dwajpoidwajopwadjopw",
  default: "",
});
