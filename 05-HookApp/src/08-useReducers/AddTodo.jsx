export const AddTodo = () => {
    return (
        <>
            <form>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Learn..."
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>
        </>
    )
}