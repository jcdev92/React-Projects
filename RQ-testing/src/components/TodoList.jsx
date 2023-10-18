import React, { useState } from "react";
import {
  useGetTodos,
  usePostTodos,
  useDeleteTodos,
  usePatchTodos,
} from "../hooks/queryTodos";

const TodoList = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { data, isLoading, isError, error } = useGetTodos();
  const mutation = usePostTodos();
  const updateMutation = usePatchTodos();
  const deleteMutation = useDeleteTodos();

  // change todo state
  const handleCheck = (todo) => {
    
    // if todo is false, change to true else if true, change to false
    todo.is_done === false ? (todo.is_done = true) : (todo.is_done = false);

    // keep the id
    setSelectedTodo(todo.id);
  };

  return (
    <div>
      <h1>React Query Testing</h1>
      <div>
        <h1>Todo List</h1>
        <div className="flex flex-col justify-center items-center w-2/5 mx-auto mt-20 border border-gray-300 rounded p-4">
          <h2 className="text-2xl font-bold mb-4">LIST</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="flex w-full items-center h-full px-4  rounded mb-4">
                <ul className="ml-2 w-full flex flex-col items-start justify-start h-full text-lg text-gray-700">
                  {
                    // data is an array of todos
                    data.data.data.map((todo) => (
                      <li key={todo.id} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          onChange={() => handleCheck(todo)}
                        />
                        {todo.task}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="flex items-center h-12 px-4 rounded mb-4 w-full justify-around">
                <button
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    mutation.mutate({
                      task: "pasear a ralph",
                    });
                  }}
                >
                  Add
                </button>
                <button
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    updateMutation.mutate({
                      id: selectedTodo,
                      task: "baniar a ralph",
                    });
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    deleteMutation.mutate(selectedTodo);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          )}
          {isError && <div>Error: {error.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
