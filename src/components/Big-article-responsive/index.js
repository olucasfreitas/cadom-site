import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
 
function BigArticleResponsive(props) {
  return (
    <div id="big-article-container" className="big-article-container">
      <div className="BigTextLink">
        <h1> {props.title1} </h1>
        <p> {props.description1} </p>
      </div>

      <div className="BigTextLink">
        <h1> {props.title2} </h1>
        <p> {props.description2} </p>
      </div>

      <div className="BigTextLink">
        <h1> {props.title3} </h1>
        <p> {props.description3} </p>
      </div>
    </div>
  );
}

export default BigArticleResponsive;