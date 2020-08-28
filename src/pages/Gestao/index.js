import React from 'react';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import './styles.css';

export default function Home() {

  return (

    <div id="container-gestao" className="Gestao">

      <div id="body-gestao">
        <h1 id="title-page-gestao"> Gestão </h1>
        <div id="gestao-text-container">
          <p id="gestao-text">
            A Gestão do CADOM tem como um dos seus princípios fundamentais, incentivar a participação em eventos,
            estimular a autonomia e a responsabilidade dos alunos com a faculdade, e lutar em todos os âmbitos pela qualidade de graduação dos discentes.
            Compactuado com a transparência e seriedade de gerir uma instituição que representa o corpo discente, o CADOM por meio deste site vem demonstrar
            o que é discutido em cada reunião para que nenhum aluno do curso sinta-se por fora e/ou excluído. Logo, nossas Atas, Editais e o Estatuto são
            disponibilizados para o acesso de todos que possuem o interesse em nossas atividades.
                </p>
        </div>

        <Article 
        title="Atas"
        description=" Todos os registros ou resenhas dos fatos ou ocorrências verificados, e
        resoluções tomadas numa assembleia ou numa reunião de corpo
        deliberativo do CADOM." 
        ></Article>

        <Article 
        title="Estatuto"
        description="Objetivando estabelecer regras de organização e funcionamento do Centro
        Acadêmico, construímos o Estatuto para regular as ações ocorridas
        referente as relações entre o CADOM, Alunos e Cesupa." 
        ></Article>

        <Article 
        title="Editais"
        description="Tudo sobre nossos Projetos, Eventos e Colaborações, informando o amplo
        corpo estudantil sobre como fazer parte da nossa atuação diária" 
        ></Article>

        <FaleConosco />

      </div>
      <Footer/>
    </div>
  )
}
