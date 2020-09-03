import React, { useState } from 'react';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import NavBar from '../../components/NavBar/index';
import ArticleResponsive from '../../components/Article-responsive/index';
import './styles.css';

export default function Home() {

  return (
    <>
      <NavBar
        id="header"
        titlePageNav="Gestao"
        NextPage1="Home"
        NextPage2="Eventos"
        NextPage3="FAQ"
        NextPage4="Publicações" />

      <div id="maincontainer-gestao" className="container-gestao">
        <h1 id="title-page-gestao" className="title-page-gestao"> Gestão </h1>

        <p id="gestao-text" className="gestao-text">
          A Gestão do CADOM tem como um dos seus princípios fundamentais, incentivar a participação em eventos,
          estimular a autonomia e a responsabilidade dos alunos com a faculdade, e lutar em todos os âmbitos pela qualidade de graduação dos discentes.
          Compactuado com a transparência e seriedade de gerir uma instituição que representa o corpo discente, o CADOM por meio deste site vem demonstrar
          o que é discutido em cada reunião para que nenhum aluno do curso sinta-se por fora e/ou excluído. Logo, nossas Atas, Editais e o Estatuto são
          disponibilizados para o acesso de todos que possuem o interesse em nossas atividades.
        </p>

        <ArticleResponsive
          title1="Ata"
          description1="Todos os registros ou resenhas dos fatos ou ocorrências verificados, e resoluções tomadas numa assembleia ou numa reunião de corpo deliberativo do CADOM."

          title2="Estatuto"
          description2="Objetivando estabelecer regras de organização e funcionamento do Centro Acadêmico, construímos o Estatuto para regular as ações ocorridas referente as relações entre o CADOM, Alunos e Cesupa."

          title3="Editais"
          description3="Tudo sobre nossos Projetos, Eventos e Colaborações, informando o amplo corpo estudantil sobre como fazer parte da nossa atuação diária."
        />

        <FaleConosco />

        <Footer />
      </div>
    </>
  )
}
