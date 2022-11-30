import {render, fireEvent, screen} from '@testing-library/react'
import Counter from './Counter'

test('Incremento del counter', () => {

    //Render component en virtual dom 
    render(<Counter />)

    //Seleccionar los elementos con los que queremos interactuar
    const counter = screen.getByTestId("counter")
    const incrementBtn = screen.getByTestId("increment")

    //Interaccion con los elementos
    fireEvent.click(incrementBtn)

    //Resultado esperado
    expect(counter).toHaveTextContent("2")
})