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
      <Route path="/Home" exact component={Home} />
      <Route path="/Eventos" component={Eventos} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Gestao" component={Gestao} />
      <Route path="/Publicações" component={Publicacoes} />
    </BrowserRouter>
  );
}

export default Routes;
