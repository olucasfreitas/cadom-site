import React from 'react';
import './styles.css';

function ArticleResponsive(props) {
  return (
    <div className="articleResponsiveContainer">
      <a href={props.link1} style={{ textDecoration: 'none' }} className="textLink">
        <h1 className="artTitle"> {props.title1} </h1>
        <p className="artText"> {props.description1} </p>
      </a>

      <a href={props.link2} style={{ textDecoration: 'none' }} className="textLink">
        <h1 className="artTitle"> {props.title2} </h1>
        <p className="artText"> {props.description2} </p>
      </a>

      <a href={props.link3} style={{ textDecoration: 'none' }} className="textLink">
        <h1 className="artTitle"> {props.title3} </h1>
        <a className="artTextLink" href={props.link4} > {props.description3} </a>
        <a className="artTextLink" href={props.link5} > {props.description4} </a>
      </a>
    </div>
  );
}

export default ArticleResponsive;