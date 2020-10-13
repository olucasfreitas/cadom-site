import React from 'react';
import './styles.css';

function Article(props) {
    return (
        <div className="containerArticle">
            <h2 className="titleContainerArticle">
                {props.title}
            </h2>
            <p className="textContainerArticle">
                {props.description1}
            </p>
            <p className="textContainerArticle">
                {props.description2}
            </p>
            <p className="textContainerArticle">
                {props.description3}
            </p>
        </div>
    );
}

export default Article;