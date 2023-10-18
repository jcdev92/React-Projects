// getData
import axios from "axios";
const todoUrl = "http://localhost:3000/todos";

// get todo
export const getTodos = async () => {
  return await axios.get(todoUrl);
};

// post todo
export const createTodo = async (data) => {
  return await axios.post(todoUrl, data);
};

// update todo
export const updateTodo = async ({ id, task, is_done }) => {
  return await axios.patch(`${todoUrl}/${id}`, {task, is_done});
};

// delete todo
export const deleteTodo = async (id) => {
  return await axios.delete(`${todoUrl}/${id}`);
};
