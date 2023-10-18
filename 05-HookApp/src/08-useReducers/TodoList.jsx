export const TodoList = ({todos, dispatch}) => {



    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo , i) => (
                        <li
                            key={todo.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <p className="text-start">{i + 1}. {todo.desc}</p>
                            <button className="btn btn-danger">Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}