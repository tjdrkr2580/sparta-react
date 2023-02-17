import axios from "axios";

export const cuxios = axios.create({
  baseURL: "http://localhost:4000",
});
