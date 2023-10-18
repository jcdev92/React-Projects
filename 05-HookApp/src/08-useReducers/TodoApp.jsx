import { useReducer }  from "react";
import { todoReducer } from "./todoReducer.js";
import { TodoList }    from "./TodoList";
import { AddTodo }     from "./AddTodo";

const initialState = [
    {
        id: Math.random().toString(36).substr(2, 9),
        desc: 'Learn React, Redux, and React Native to become a front-end developer',
        done: false
    } ,
    {
        id: Math.random().toString(36).substr(2, 9) ,
        desc: 'Learn Mongo Db and Node Js to become a back-end developer',
        done: false
    }
];


export const TodoApp = () => {

    const [todos , dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp </h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} dispatch={dispatch}/>
                </div>
                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr/>
                    <AddTodo dispatch={dispatch}/>
                </div>
            </div>
        </>
    )
}