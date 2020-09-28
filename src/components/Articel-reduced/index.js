import React from 'react';
import './styles.css';

function ArticleReduced(props) {
    return (
        <div className="textContainer">
            <h1 className="title-text-reduced" > {props.title} </h1>
            <div className="container-pbs">
                <p className="general-text-reduced"> {props.text} </p>
            </div>
        </div>
    );
}

export default ArticleReduced;