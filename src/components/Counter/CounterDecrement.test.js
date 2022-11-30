import {render, fireEvent, screen} from "@testing-library/react";
import Counter from "./Counter";


test("decrement counter", () => {
    render(<Counter/>)

    const counter = screen.getByTestId('counterDecrement')
    const decrementBtn = screen.getByTestId('decrement')

    fireEvent.click(decrementBtn)

    expect(counter).toHaveTextContent("1")
})