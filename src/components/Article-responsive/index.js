import React from 'react';
import './styles.css';
 
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
        <a className="Art-text-link" href={props.link4} > {props.description3} </a>
        <a className="Art-text-link" href={props.link5} > {props.description4} </a>
      </a>
    </div>
  );
}

export default ArticleResponsive;