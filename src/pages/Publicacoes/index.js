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
        title = "Publicação 1"
        text ="Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
        Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor"
        />
        <ArticleReduced
        title = "Publicação 2"
        text ="Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
        Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor"
        />
        <ArticleReduced
        title = "Publicação 3"
        text ="Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
        Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor"
        />
        <ArticleReduced
        title = "Para ver mais textos de nossos alunos, acesse o link abaixo."
        text ="text Link"
        />

        <FaleConosco />
        <Footer />

      </div>
    </>
  )
}
