import { render } from "@testing-library/react";
import Alterarsenha from "./index";
import "@testing-library/jest-dom";

test("Titulo Alterar Senha", () => {
  const { getByText } = render(<Alterarsenha />);
  expect(getByText("Alterar senha")).toBeInTheDocument();
});

test("Nome de usuário", () => {
  const { getByText } = render(<Alterarsenha />);
  expect(getByText("Usuário")).toBeInTheDocument();
});

test("Nome Senha Antiga", () => {
  const { getByText } = render(<Alterarsenha />);
  expect(getByText("Senha antiga")).toBeInTheDocument();
});

test("Nome Senha Nova", () => {
  const { getByText } = render(<Alterarsenha />);
  expect(getByText("Nova senha")).toBeInTheDocument();
});

test("Botão de Alterar Senha", () => {
  const { getByRole } = render(<Alterarsenha />);
  const buttonElement = getByRole("button", { name: "Alterar" });
  expect(buttonElement).toBeInTheDocument();
});

test("Campo de Usuário", () => {
  const { getByLabelText } = render(<Alterarsenha />);
  const usernameInput = getByLabelText("Usuário");
  expect(usernameInput).toBeInTheDocument();
});

test("Campo de Senha Antiga", () => {
  const { getByLabelText } = render(<Alterarsenha />);
  const usernameInput = getByLabelText("Senha antiga");
  expect(usernameInput).toBeInTheDocument();
});

test("Campo de Senha Nova", () => {
  const { getByLabelText } = render(<Alterarsenha />);
  const usernameInput = getByLabelText("Nova senha");
  expect(usernameInput).toBeInTheDocument();
});
