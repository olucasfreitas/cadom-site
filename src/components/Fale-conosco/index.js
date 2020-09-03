import React from 'react';
import './styles.css';

function FaleConosco() {
    return (

        <form id="faleConosco-gestao" className="faleConosco-gestao">
            <h2 id="textContainer-title" className="textContainer-title">Fale Conosco</h2>
            <input id="inputPadrao-gestao" className="inputPadrao-gestao" type="text" placeholder="Nome" />
            <input id="inputPadrao-gestao" className="inputPadrao-gestao" type="number" placeholder="Matrícula" />
            <input id="inputPadrao-gestao" className="inputPadrao-gestao" type="e-mail" placeholder="E-mail" />
            <input id="inputPadrao-gestao" className="inputPadrao-gestao" type="text" placeholder="Assunto" />
            <textarea id="inputMensagem-gestao" className="inputMensagem-gestao" type="text" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FaleConosco;