import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <section class="top-nav">
      <div>
        <img id="logo" src="https://i.imgur.com/25qhjdi.png" alt="logotipo" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <Link to="/signup">Entrar</Link>
        </li>
        <li>
          <Link to="/signin">Cadastrar</Link>
        </li>
        <li>
          <Link to="/pesquisar">Procurar</Link>
        </li>
        <li>
          <Link to="/alterarsenha">Alterar Senha</Link>
        </li>
      </ul>
    </section>
  );
}
