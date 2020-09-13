import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import ArticleReduced from '../../components/Articel-reduced/index';
import './styles.css';
import FaleConosco from '../../components/Fale-conosco/index.js';

export default function Publicacoes() {
  return (

    <>
      <NavBar
        titlePageNav="Publicações"
        NextPage1="Home"
        NextPage2="Eventos"
        NextPage3="FAQ"
        NextPage4="Gestao" />

      <div className="container-publi">
        <h1 className="title-page-publi"> Publicações Acadêmicas </h1>
        <p className="publi-text">
          Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
        </p>

        <ArticleReduced
        title1 = "Publicações 1"
        text1 ="Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
        Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor"

        title2 = "Publicações 2"
        text2 ="Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
        Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor"

        title3 = "Publicações 3"
        text3 ="Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
        Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor"

        />

        <h1 className="title-text-link"> Para ver mais textos de nossos alunos, acesse o link abaixo.</h1>
        <div className="container-pbs-link">
          <p className="general-text">
            text Link
       </p>
        </div>

        <FaleConosco />
        <Footer />

      </div>
    </>
  )
}
