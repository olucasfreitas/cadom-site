import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import './styles.css';
import FaleConosco from '../../components/Fale-conosco/index.js';

export default function FAQ() {
  return (



    <>
      <NavBar
        titlePageNav="Publicações"
        NextPage1="Home"
        NextPage2="Eventos"
        NextPage3="FAQ"
        NextPage4="Gestao" />

      <div className="FAQ-publi">
        <h1 className="title-page-FAQ"> FAQ </h1>
        <p className="FAQ-text">
          Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
        </p>

        <h1 className="title-text" > FAQ </h1>
        <div className="container-pbs">
          <p>Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
       </p>
        </div>


        <h1 className="title-text" > FAQ </h1>
        <div className="container-pbs">
          <p>Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
       </p>
        </div>


        <h1 className="title-text"> FAQ </h1>
        <div className="container-pbs">
          <p>Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
       </p>
        </div>

        <FaleConosco />
        <Footer />


      </div>




    </>
  )
}