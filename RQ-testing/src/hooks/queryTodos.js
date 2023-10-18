import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
} from "../api/fetchTodos";

const key = "todos";

// get all todos
export const useGetTodos = () => {
  return useQuery(key, getTodos);
};

// create a todo and invalidate the old state
export const usePostTodos = () => {
  const queryClient = useQueryClient();
  return useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });
};

// update a todo and invalidate the old state
export const usePatchTodos = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo,
    {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
    onError: (error) => {
      console.log(error);
    },  
  });
};

// delete a completed todo and invalidate the old state
export const useDeleteTodos = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });
};
