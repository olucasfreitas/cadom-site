import React from 'react';
import './styles.css';

function Article(props) {
    return (
        <div id="textContainer-gestao">
            <h2 id="textContainer-title">
                {props.title}
            </h2>
            <p id="textContainer-text">
                {props.description}
            </p>
        </div>
    );
}

export default Article;