import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //? event.target.value trae el valor que se ingresa en el input.
  //# taget se puede destructurar:
  const handleInput = ({ target }) => {
    setInputValue(target.value);
    console.log(target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // onAddCategory((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim().toLowerCase());
    setInputValue("");
  };

  return (
    // <form onSubmit={(event) => onSubmitForm(event)}>
    <form onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='Buscar Gif...'
        value={inputValue}
        // onChange={(event)=>handleInput(event)}
        //# la función también se puede escribir sola, y por defecto enviará el event
        onChange={handleInput}
      />
    </form>
  );
};
