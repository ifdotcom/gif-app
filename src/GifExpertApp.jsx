import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //# necesitamos crear un nuevo arreglo, push muta el array y React trata de no hacer mutaciones en el estado
    //! aquí el push no funciona setCategories(categories.push("Demon Slayer"))
    //# Forma 1 de agregar elementos al arr, crear una copia (destructurar)

    // antes de actualizaar el estado verificar si ya existe la categoria

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //# Forma 2 de agregar elementos al arr, con un callback
    // setCategories(cat => [...cat, "Valorant"])
  };
  return (
    <>
      {/* input */}
      <AddCategory
        //? no queda muy claro cuado mndamos la función del hook, en sí, solo debería recibir el valor para actualizar el estado
        // onAddCategory={setCategories}
        onNewCategory={(category) => onAddCategory(category)}
      />
      {/* listado de Gif */}
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}

      {/* Gif item */}
    </>
  );
};
