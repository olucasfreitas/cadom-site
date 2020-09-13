import React from 'react';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Footer from '../../components/Footer/index';
import ArticleResponsive from '../../components/Article-responsive/index';
import NavBar from '../../components/NavBar/index';
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
    <div id ="container" className="container">
      
      <h1 id="title-eventos" className="title-eventos">Eventos</h1>
      <p id="eventos-text" className="eventos-text">Diversos eventos são propostos pelo CADOM semanalmente, promovendo
      palestras, apresentações, atividades extracurriculares de ensino e pesquisa, e
      extensão universitária sobre múltiplas áreas do direito.</p>
      
        <ArticleResponsive
        title1="Fotos"
        description1="Registro dos eventos, apresentações e palestras proporcionadas somente
        pelo CADOM ou com parcerias."   
        link="https://drive.google.com/drive/folders/1PpE_FqnK7l099DDi6RnwR8hGUn9b0LO3?usp=sharing"   
        
        title2="Eventos Realizados"
        description2="Todas as informações sobre os atuais e futuros eventos que teremos na
        instituição."

        title3="Redes Socias"
        />  
      <FaleConosco /> 
      <Footer />
    </div>
    </>
  )
}
