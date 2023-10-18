import {fireEvent, screen, render} from "@testing-library/react";
import Counter from "../../components/Counter.jsx";

describe('testing de <Counter />', () => {
    const initialValue = 10;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<Counter valueu={initialValue}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar el valor por defecto de 10', () => {
        render(<Counter value={initialValue} />)
        // search for the element with the text 10 in the snapshot
            // expect(screen.getByText('10')).toBeTruthy()
        // searching the element by html tag level
            expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('10')
    })

    test('debe de incrementar con el boton +', () => {
        render(<Counter value={initialValue}/>)
        fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByText('+'))
        screen.debug()
        expect(screen.getByText('13')).toBeTruthy()

        fireEvent.click(screen.getByText('-'))
        fireEvent.click(screen.getByText('-'))
        screen.debug()
        expect(screen.getByText('11')).toBeTruthy()

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        screen.debug()
        expect(screen.getByText('10')).toBeTruthy()

    })
})