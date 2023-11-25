const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock("../../src/hooks/useFetchGifs");
describe("pruebas en  <GifGrid/>", () => {
  const category = "Harry Potter";
  test("debe de mostar el loading inicalmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostar items cuando se cargan las imágenes useFetchGifs  ", () => {
    const gifs = [
      {
        id: "ABC0",
        title: "Harry Potter",
        url: "https://harryP.gif",
      },
      {
        id: "ABC1",
        title: "Hermione Granger",
        url: "https://hermioneG.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
