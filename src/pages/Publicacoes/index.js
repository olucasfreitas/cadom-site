import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import './styles.css';
import FaleConosco from '../../components/Fale-conosco/index.js';

export default function Publicacoes() {
  return (

    

    <>
    <NavBar 
    titlePageNav="Publicações" 
    NextPage1="Home" 
    NextPage2="Eventos"
    NextPage3="FAQ"
    NextPage4="Gestao"/>
    
    <div className="container-publi">
      <h1 className="title-page-publi"> Publicações Academicas </h1>
      <p className="publi-text">
          Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem 
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor  
        </p>

      <h1  className= "title-text" > Publicações 1 </h1>
      <div className="container-pbs">
       <p>Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem 
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
       </p>
       </div>


       <h1  className= "title-text" > Publicações 2 </h1>
       <div className="container-pbs">
       <p>Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem 
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
       </p>
       </div>


       <h1 className= "title-text"> Publicações 3 </h1>
       <div className="container-pbs"> 
       <p>Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum Lorem 
          Lorem ypsolum Lorem Lorem ypsolum Lorem Lorem ypsolum ypsolum Lor
       </p>
       </div> 

       <h1 className= "tile-text-link"> Para ver mais textos de nossos alunos, acesse o link</h1>
       <div className="container-pbs-link"> 
       <p> 
         text Link
       </p>
       </div> 

       <FaleConosco />
       <Footer />

      
    </div>




    </>
  )
}
