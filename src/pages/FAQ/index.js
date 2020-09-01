import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import FaleConosco from '../../components/Fale-conosco/index.js';

export default function FAQ() {
  return (
    <>
    <NavBar 
    titlePageNav="FAQ" 
    NextPage1="Home" 
    NextPage2="Eventos"
    NextPage3="Gestao"
    NextPage4="Publicações"/>
    
    
    <div>
    <div id="container-faq" className="Faq">
      <h1 id="title-page-faq"> FAQ </h1>
        <div id="publi-text-faq">
          <p id="faq-text">
          Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
          Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim 
         </p>
        </div>

        <Article 
        title="Questão 1"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Questão 2"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Questão 3"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>

        <Article 
        title="Questão 4"
        description=" Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim Lorim ypsolomm Lorim
        Lorim ypsolomm Lorim Lorim ypsolomm LorimLorim ypsolomm Lorim Lorim ypsolomm Lorim" 
        ></Article>
      

        <FaleConosco />
      <Footer/>

    </div>
    </div>
    </>
  )
}
