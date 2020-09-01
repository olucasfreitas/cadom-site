import React from 'react';
import NavBar from '../../components/NavBar/index';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Article from '../../components/Article/index';
import Footer from '../../components/Footer/index';
import './styles.css';


export default function Eventos() {
  return (
    <>
    <NavBar 
    titlePageNav="Eventos"  
    NextPage1="Home" 
    NextPage2="FAQ"
    NextPage3="Gestao"
    NextPage4="Publicações"/>
    <div id="container" className="container">
        <h1 >Eventos</h1>
        <p>Diversos eventos são propostos pelo CADOM semanalmente, promovendo
        palestras, apresentações, atividades extracurriculares de ensino e pesquisa, e
        extensão universitária sobre múltiplas áreas do direito.</p>
        <Article
        title="FOTOS"
        description="Registro dos eventos, apresentações e palestras proporcionadas somente
        pelo CADOM ou com parcerias."
        ></Article>  
        <Article
        title="EVENTOS REALIZADOS"
        description="Todas as informações sobre os atuais e futuros eventos que teremos na
        instituição."
        ></Article> 
        <FaleConosco /> 
        <Footer />
      </div>
    
    </>
  )
}
