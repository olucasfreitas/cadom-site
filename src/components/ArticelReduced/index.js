import React from 'react';
import './styles.css';

function ArticleReduced(props) {
    return (
        <div className="textContainer">
            <h1 className="titleTextReduced" > {props.title} </h1>
            <div className="containerReduced">
                <p className="generalTextReduced"> {props.text} </p>
                <p className="generalTextReduced"> {props.autor} </p>
                <p className="generalTextReduced"> {props.orientador} </p>

                <a
                    style={{ textDecoration: 'none' }}
                    className="generalTextLink"
                    href="https://drive.google.com/drive/folders/1im78BNyK5urVP6JFqfagvM9G2hTPeiRi?usp=sharing">

                    {props.textLink}
                </a>

            </div>
        </div>
    );
}

export default ArticleReduced;