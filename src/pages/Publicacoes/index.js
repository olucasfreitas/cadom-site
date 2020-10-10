import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import ArticleReduced from '../../components/ArticelReduced/index';
import './styles.css';
import FaleConosco from '../../components/FaleConosco/index.js';

export default function Publicacoes() {
  return (
    <>
      <NavBar
        titlePageNav="Publicações"
        NextPage1="Home"
        NextPage2="Eventos"
        NextPage3="FAQ"
        NextPage4="Gestao" />

      <div className="containerPubli">

        <h1 className="titlePagePubli"> Publicações Acadêmicas </h1>
        <p className="publiText">
          Este espaço será destinado à qualquer estudante do Curso de Direito do CESUPA que queira divulgar
          suas produções acadêmicas, com o intuito criarmos o nosso próprio acervo digital de Artigos Científicos,
          TCCs, Teses de Mestrado e Doutorado, etc. Pensamos em criar um espaço para a aquisição e disseminação de conhecimento
          entre todos os estudantes. Então vamos construir isso tudo juntos!
        </p>

        <ArticleReduced
          title="Publicação 1"
          text="O PAPEL DA INTELIGÊNCIA ARTIFICIAL NO SETOR JURÍDICO: O PAPEL DO ROBÔ JUIZ"
          autor="Autor: Luis Gustavo Savedra Dias"
          orientador="Orientador: Bruno Ferreira Montenegro"
        />
        <ArticleReduced
          title="Publicação 2"
          text="A TECNOLOGIA COMO FORMA DE DEMOCRATIZAÇÃO DO CONHECIMENTO JURÍDICO"
          autor="Autor: Luis Gustavo Savedra Dias"
          orientador="Orientador: Amanda Ramalho"
        />
        <ArticleReduced
          title="Para ver mais textos de nossos alunos, acesse o link abaixo."
          textLink="https://drive.google.com/drive/folders/1im78BNyK5urVP6JFqfagvM9G2hTPeiRi?usp=sharing"
        />

        <FaleConosco />
        <Footer />

      </div>
    </>
  )
}
