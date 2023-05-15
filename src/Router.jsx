import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";
import Pesquisar from "./pages/Pesquisar/index";
import Ferramentas from "./pages/Ferramentas/index";
import Alterarsenha from "./pages/Alterarsenha/index";

import Header from "./components/Header/index";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pesquisar" element={<Pesquisar />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/alterarsenha" element={<Alterarsenha />} />
      </Routes>
    </>
  );
}
