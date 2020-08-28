import React from 'react';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Footer from '../../components/Footer/index';
import './styles.css';

export default function Home() {

  return (

    <div id="container-gestao" className="Gestao">

      <div id="body-gestao">
        <h1 id="title-page-gestao"> Gestão </h1>
        <div id="gestao-text-container">
          <p id="gestao-text">
            &nbsp;
            &nbsp;
            A Gestão do CADOM tem como um dos seus princípios fundamentais, incentivar a participação em eventos,
            estimular a autonomia e a responsabilidade dos alunos com a faculdade, e lutar em todos os âmbitos pela qualidade de graduação dos discentes.
            Compactuado com a transparência e seriedade de gerir uma instituição que representa o corpo discente, o CADOM por meio deste site vem demonstrar
            o que é discutido em cada reunião para que nenhum aluno do curso sinta-se por fora e/ou excluído. Logo, nossas Atas, Editais e o Estatuto são
            disponibilizados para o acesso de todos que possuem o interesse em nossas atividades.
                </p>
        </div>

        <div id="textContainer-gestao">
          <h2 id="textContainer-title">Atas</h2>
          <p id="textContainer-text">
            &nbsp;
            &nbsp;
            Todos os registros ou resenhas dos fatos ou ocorrências verificados, e
            resoluções tomadas numa assembleia ou numa reunião de corpo
            deliberativo do CADOM.
                </p>
        </div>

        <div id="textContainer-gestao">
          <h2 id="textContainer-title">Estatuto</h2>
          <p id="textContainer-text">
            &nbsp;
            Objetivando estabelecer regras de organização e funcionamento do Centro
            Acadêmico, construímos o estatuto para regular as ações ocorridas
            referente as relações entre o CADOM, Alunos e Cesupa.
                </p>
        </div>

        <div id="textContainer-gestao">
          <h2 id="textContainer-title">Editais</h2>
          <p id="textContainer-text">
            &nbsp;
            &nbsp;
            Tudo sobre nossos Projetos, Eventos e Colaborações, informando o amplo
            corpo estudantil sobre como fazer parte da nossa atuação diária.
                </p>
        </div>

        <FaleConosco />

      </div>
      <Footer/>
    </div>
  )
}
