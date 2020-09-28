import React from 'react';
import './styles.css';
import { GrInstagram, GrFacebook } from 'react-icons/gr';

function ArticleEvents(props) {
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
  
        <div href={props.link3}  style={{textDecoration:'none'}} className="TextLink">
          <h1 className="Art-title"> {props.title3} </h1>
          <div className="Container-icons">
            <a className="Art-text-link" href={props.link4}>
              <GrInstagram className="Icon" size={40}/>
            </a>

            <a className="Art-text-link" href={props.link5}>
              <GrFacebook className="Icon" size={40}/>
            </a>
          </div>
            

        </div>
      </div>
    );
  }

export default ArticleEvents;