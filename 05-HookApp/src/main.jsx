import React       from 'react'
import ReactDOM    from 'react-dom/client'
import './index.css'
import { TodoApp } from "./08-useReducers/TodoApp";

// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm }            from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook }    from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-example/index.js";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memo/Memorize";
// import { MemoHook } from "./06-memo/MemoHook";
// import { CallbackHook } from "./06-memo/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducers/intro-reducer";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
)
