import React from 'react';
import './styles.css';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import './styles.css';
import FaleConosco from '../../components/Fale-conosco/index.js';

export default function Publicacoes() {
  return (
    <div id="container-Publi" className="Publi">
      <h1 id="title-page-publi"> Publicações Académicas </h1>
        <div id="publi-text-container">
          <p id="publi-text">
          Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
          Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim
           
         </p>
        </div>

        <Article 
        title="Publicações 1"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Publicações 2"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Publicações 3"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Publicações 4"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Para ver outros textos dos nossos alunos acesse :"
        description=" LINK " 
        ></Article>

       

        <FaleConosco />
      <Footer/>
    </div>
  )
}
