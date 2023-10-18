import { useEffect , useState } from "react";
import { Message }              from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'strider@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('email changed');
    }, [email]);
    

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

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
            { (username === 'strider2') && <Message /> }
        </>
    )
}