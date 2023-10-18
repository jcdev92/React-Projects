import { useForm }              from "../hooks/useForm.js";

export const FormWithCustomHook = () => {

    const {onInputChange, onResetForm, username, email, password} = useForm({
            username: '' ,
            email: '',
            password: ''
    });



    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Your name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <br/>
            <input
                type="email"
                className="form-control"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <br/>
            <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <br/>
            <button className="btn btn-primary" onClick={onResetForm}>Reset</button>
        </>
    )
}