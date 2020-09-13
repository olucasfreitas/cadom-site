import React from 'react';
import './styles.css';

function ArticleReduced(props) {
    return (
        <div className="textContainer">
            <h1 className="title-text" > {props.title1} </h1>
            <div className="container-pbs">
                <p className="general-text"> {props.text1} </p>
            </div>

            <h1 className="title-text" > {props.title2} </h1>
            <div className="container-pbs">
                <p className="general-text">{props.text2} </p>
            </div>

            <h1 className="title-text"> { props.title3 } </h1>
            <div className="container-pbs">
                <p className="general-text">{ props.text3 }
                </p>
            </div>
        </div>
    );
}

export default ArticleReduced;