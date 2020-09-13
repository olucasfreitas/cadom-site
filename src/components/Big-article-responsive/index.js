import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
 
function BigArticleResponsive(props) {
  return (
    <div id="big-article-container" className="big-article-container">
      <div className="BigTextLink">
        <h1 className="Bart-title"> {props.title1} </h1>
        <p className="Bart-text"> {props.description1} </p>
      </div>

      <div className="BigTextLink">
        <h1 className="Bart-title"> {props.title2} </h1>
        <p className="Bart-text"> {props.description2} </p>
      </div>

      <div className="BigTextLink">
        <h1 className="Bart-title"> {props.title3} </h1>
        <p className="Bart-text"> {props.description3} </p>
      </div>
    </div>
  );
}

export default BigArticleResponsive;