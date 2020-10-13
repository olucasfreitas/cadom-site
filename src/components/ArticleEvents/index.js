import React from 'react';
import './styles.css';
import { GrInstagram, GrFacebook } from 'react-icons/gr';

function ArticleEvents(props) {
  return (
    <div className="articleEventsContainer">
      <a href={props.link1} style={{ textDecoration: 'none' }} className="textLink">
        <h1 className="artTitle"> {props.title1} </h1>
        <p className="artText"> {props.description1} </p>
      </a>

      <a href={props.link2} style={{ textDecoration: 'none' }} className="textLink">
        <h1 className="artTitle"> {props.title2} </h1>
        <p className="artText"> {props.description2} </p>
      </a>

      <div href={props.link3} style={{ textDecoration: 'none' }} className="textLink">
        <h1 className="artTitle"> {props.title3} </h1>
        <div className="containerIcons">
          <a className="artTextLink" href={props.link4}>
            <GrInstagram className="icon" size={40} />
          </a>

          <a className="artTextLink" href={props.link5}>
            <GrFacebook className="icon" size={40} />
          </a>
        </div>


      </div>
    </div>
  );
}

export default ArticleEvents;