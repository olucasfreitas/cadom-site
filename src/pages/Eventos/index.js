import React from 'react';
import FaleConosco from '../../components/FaleConosco/index.js';
import Footer from '../../components/Footer/index';
import ArticleEvents from '../../components/ArticleEvents/index';
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
        NextPage4="Publicações" />

      <div className="containerEvents">

        <h1 className="titleEventos">Eventos</h1>
        <p className="eventosText">Diversos eventos são propostos pelo CADOM semanalmente, promovendo
        palestras, apresentações, atividades extracurriculares de ensino e pesquisa, e
      extensão universitária sobre múltiplas áreas do direito.</p>

        <ArticleEvents
          title1="Fotos"
          description1="Registro dos eventos, apresentações e palestras proporcionadas somente
        pelo CADOM ou com parcerias."
          link="https://drive.google.com/drive/folders/1PpE_FqnK7l099DDi6RnwR8hGUn9b0LO3?usp=sharing"

          title2="Eventos Realizados"
          description2="Todas as informações sobre os atuais e futuros eventos que teremos na
        instituição."

          title3="Redes Socias"
          link4="https://www.instagram.com/cadomcesupa/"
          link5="https://www.facebook.com/cadomcesupa"
        />

        <FaleConosco />
        <Footer />
      </div>
    </>
  )
}
