import React from 'react';
import './styles.css';

function Article(props) {
    return (
        <div className="textContainer-gestao">
            <h2 className="textContainer-title">
                {props.title}
            </h2>
            <p className="textContainer-text">
                {props.description}
            </p>
        </div>
    );
}

export default Article;