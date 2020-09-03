import React from 'react';
import './styles.css';
import Article from '../Article/index';

function ArticleResponsive(props) {
    return (
        <div id="article-container" className="article-container">
        <Article
        title = {props.title1}
        description = {props.description1}
        />

        <Article
        title = {props.title2}
        description = {props.description2}
        />

        <Article
        title = {props.title3}
        description = {props.description3}
        />
      </div>
    );
}

export default ArticleResponsive;