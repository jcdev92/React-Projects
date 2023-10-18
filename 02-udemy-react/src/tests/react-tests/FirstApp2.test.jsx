import {render, screen} from "@testing-library/react";
import Header from "../../components/Header.jsx";


describe('Pruebas en <Header/>', () => {
    const title = 'Hola, soy Goku';
    const subtitle = 15;

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<Header title={title} subtitle={subtitle}/>);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mesaje "Hola, soy Goku"', () => {
        render(<Header title={title} />);
        expect(screen.getByText(title)).toBeTruthy();

    })

    test('debe de mostrar el titulo en h1' , () => {
        render(<Header title={title} />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    })

    test('debe de mostrar el subtitulo enviado por props' , () => {
        render(<Header title={title} subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(3);
    })

})