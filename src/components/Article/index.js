import React from 'react';
import './styles.css';

function Article(props) {
    return (
        <div id="textContainer-gestao" className="textContainer-gestao">
            <h2 id="textContainer-title" className="textContainer-title">
                {props.title}
            </h2>
            <p id="textContainer-text" className="textContainer-text">
                {props.description}
            </p>
        </div>
    );
}

export default Article;