import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((data) => (
          // primera forma
          // <GifItem key={data.id}  title={data.title} url={data.url}/>

          // segunda forma
          <GifItem key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};
 