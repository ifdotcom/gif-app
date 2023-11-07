import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("pruebas en <AddCategory/>", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    // disparamos el evento
    fireEvent.input(input, { target: { value: "Harry Potter" } });
    expect(input.value).toBe("Harry Potter");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Harry Potter";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    // se llama el evento onChange(fireEvent.input)
    fireEvent.input(input, { target: { value: inputValue } });
    // lanzamos el evento submit ( despues el value del input quedará vacio)
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toBeCalledWith(inputValue.toLowerCase());
  });

  test("no debe llamar onNewCategory si el input no tiene valor", () => {

    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
