import {render} from "@testing-library/react";
import Header from "../../components/Header.jsx";


describe('Pruebas en <Header/>', () => {
        test('debe de hacer match con el snapshot', () => {
            const {container} = render(<Header title="Hello World" subtitle={15}/>);
            expect(container).toMatchSnapshot();
        })

        test('debe de mostrar el titulo enviado por props', () => {
            const title = 'Hello World';
            const subtitle = 15;
            const {getByText, getByTestId} = render(<Header title="Hello World" subtitle={15}/>);

            // expect(getByText('Hello World')).toBeTruthy();;

            const byTestId = getByTestId('test-title');
            expect(byTestId.innerHTML).toBe(title);
            expect(getByText(subtitle)).toBeTruthy();


        })
})