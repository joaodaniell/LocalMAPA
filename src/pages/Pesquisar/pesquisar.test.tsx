import { render } from "@testing-library/react";
import Pesquisar from "./index";
import "@testing-library/jest-dom";


test("Boas Vindas", () => {
  const { getByText } = render(<Pesquisar />);
  expect(
    getByText(
      "Seja Bem Vindo! Temos o mapeamento detalhado da sua instituição de ensino Digite sua instiuição ou universidade desejável e aproveite os recursos."
    )
  ).toBeInTheDocument();
});

test("Verificar Classe Person", () => {
  const { getByText } = render(<Pesquisar />);
  expect(
    getByText(
      "Seja Bem Vindo! Temos o mapeamento detalhado da sua instituição de ensino Digite sua instiuição ou universidade desejável e aproveite os recursos."
    )
  ).toHaveAttribute("class", "person");
});

test("Campo de Instituição", () => {
  const { getByLabelText } = render(<Pesquisar />);
  const usernameInput = getByLabelText("Nome:(Sigla)");
  expect(usernameInput).toBeInTheDocument();
});

test("Nome Instituição", () => {
  const { getByText } = render(<Pesquisar />);
  expect(getByText("Nome:(Sigla)")).toBeInTheDocument();
});

test("Botão de Pesquisar", () => {
  const { getByRole } = render(<Pesquisar />);
  const buttonElement = getByRole("button", { name: "Pesquisar" });
  expect(buttonElement).toBeInTheDocument();
});

test("Verificar renderização da tabela", () => {
  const { getByRole } = render(<Pesquisar />);
  const tableElement = getByRole("table");
  expect(tableElement).toBeInTheDocument();
});

test("Verificar renderização do mapa", () => {
  const { getByRole } = render(<Pesquisar />);
  const tableElement = getByRole("table");
  expect(tableElement).toBeInTheDocument();
});
