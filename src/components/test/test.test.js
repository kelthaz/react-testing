import {render, screen} from "@testing-library/react"
import Test from './test'

test('Validar texto', () =>{
    render(<Test/>)

    const getText = screen.getByText(/Estamos probando los componentes/i)

    expect(getText).toBeInTheDocument()
})