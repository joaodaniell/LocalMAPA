import { render } from "@testing-library/react";
import Ferramentas from "./index";
import "@testing-library/jest-dom";

test("Titulo Mapa", () => {
  const { getByText } = render(<Ferramentas />);
  expect(getByText("Mapa")).toBeInTheDocument();
});

test("Verificar renderização do componente Mapa", () => {
  const { getByTestId } = render(<Ferramentas />);
  const iframeElement = getByTestId("mapa");
  expect(iframeElement).toBeInTheDocument();
});
