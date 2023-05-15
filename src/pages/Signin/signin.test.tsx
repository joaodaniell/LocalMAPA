import { render } from "@testing-library/react";
import Signin from "./index";
import "@testing-library/jest-dom";

test("Nome Registro", () => {
  const { getByText } = render(<Signin />);
  expect(getByText("Registro")).toBeInTheDocument();
});

test("Nome de usuário", () => {
  const { getByText } = render(<Signin />);
  expect(getByText("Usuário")).toBeInTheDocument();
});

test("Botão de Registrar", () => {
  const { getByRole } = render(<Signin />);
  const buttonElement = getByRole("button", { name: "Registrar" });
  expect(buttonElement).toBeInTheDocument();
});

test("Nome senha", () => {
  const { getByText } = render(<Signin />);
  expect(getByText("Senha")).toBeInTheDocument();
});

test("Campo de senha", () => {
  const { getByLabelText } = render(<Signin />);
  const passwordInput = getByLabelText("Senha");
  expect(passwordInput).toBeInTheDocument();
});

test("Campo de usuário", () => {
  const { getByLabelText } = render(<Signin />);
  const usernameInput = getByLabelText("Usuário");
  expect(usernameInput).toBeInTheDocument();
});
