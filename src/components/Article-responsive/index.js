import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
 
function ArticleResponsive(props) {
  return (
    <div id="article-container" className="article-container">
      <a href={props.link1}  style={{textDecoration:'none'}} className="TextLink">
        <h1 className="Art-title"> {props.title1} </h1>
        <p className="Art-text"> {props.description1} </p>
      </a>

      <a href={props.link2} style={{textDecoration:'none'}} className="TextLink">
        <h1 className="Art-title"> {props.title2} </h1>
        <p className="Art-text"> {props.description2} </p>
      </a>

      <a href={props.link3}  style={{textDecoration:'none'}} className="TextLink">
        <h1 className="Art-title"> {props.title3} </h1>
        <p className="Art-text"> {props.description3} </p>
      </a>
    </div>
  );
}

export default ArticleResponsive;