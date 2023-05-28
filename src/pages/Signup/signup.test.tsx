import { render } from "@testing-library/react";
import Signup from "./index";
import "@testing-library/jest-dom";

test("Nome Login", () => {
  const { getByText } = render(<Signup />);
  expect(getByText("Login")).toBeInTheDocument();
});

test("Nome de usuário", () => {
  const { getByText } = render(<Signup />);
  expect(getByText("Nome de usuário")).toBeInTheDocument();
});

test("Botão de Entrar", () => {
  const { getByRole } = render(<Signup />);
  const buttonElement = getByRole("button", { name: "Entrar" });
  expect(buttonElement).toBeInTheDocument();
});

test("Nome senha", () => {
  const { getByText } = render(<Signup />);
  expect(getByText("Senha")).toBeInTheDocument();
});

test("Campo de senha", () => {
  const { getByLabelText } = render(<Signup />);
  const passwordInput = getByLabelText("Senha");
  expect(passwordInput).toBeInTheDocument();
});

test("Campo de usuário", () => {
  const { getByLabelText } = render(<Signup />);
  const usernameInput = getByLabelText("Nome de usuário");
  expect(usernameInput).toBeInTheDocument();
});

//getby encontra um elemento
//getall encontra todos os elementos
//toHaveAttribute ('class','nomedaclass')
