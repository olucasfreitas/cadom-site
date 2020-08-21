import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import FAQ from "./pages/FAQ";
import Gestao from "./pages/Gestao";
import Publicacoes from "./pages/Publicacoes";

// rotas para as páginas criadas
function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/events" component={Eventos} />
      <Route path="/faq" component={FAQ} />
      <Route path="/gestao" component={Gestao} />
      <Route path="/publicacoes" component={Publicacoes} />
    </BrowserRouter>
  );
}

export default Routes;
