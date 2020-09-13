import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import ArticleReduced from '../../components/Articel-reduced/index';
import './styles.css';
import FaleConosco from '../../components/Fale-conosco/index.js';

export default function FAQ() {
  return (

    <>
      <NavBar
        titlePageNav="FAQ"
        NextPage1="Home"
        NextPage2="Eventos"
        NextPage3="Gestao"
        NextPage4="Publicações" />

      <div className="FAQ-publi">
        <h1 className="title-page-FAQ"> FAQ </h1>
        <p className="FAQ-text">
          Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
        </p>

        <ArticleReduced
        title1="Questão 1"
        text1=" QUESTAO QUESTAO QUESTAO"

        title2="Questão 2"
        text2="QUESTAO QUESTAO QUESTAO"

        title3="Questão 3"
        text3="QUESTAO QUESTAO QUESTAO"
        />
        <FaleConosco />
        <Footer />
      </div>

    </>
  )
}