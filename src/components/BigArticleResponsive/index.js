import React from 'react';
import './styles.css';

function BigArticleResponsive(props) {
  return (
    <div className="bigArticleContainer">
      <div className="bigTextLink">
        <h1 className="bartTitle"> {props.title1} </h1>
        <p className="bartText"> {props.description1} </p>
      </div>

      <div className="bigTextLink">
        <h1 className="bartTitle"> {props.title2} </h1>
        <p className="bartText"> {props.description2} </p>
      </div>

      <div className="bigTextLink">
        <h1 className="bartTitle"> {props.title3} </h1>
        <p className="bartText"> {props.description3} </p>
      </div>
    </div>
  );
}

export default BigArticleResponsive;