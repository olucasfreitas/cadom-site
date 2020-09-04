import React from 'react';
import './styles.css';

function FaleConosco() {
    return (

        <form className="faleConosco-gestao">
            <h1 id="title">Fale Conosco</h1>
            <input className="inputPadrao-gestao" type="text" placeholder="Nome" />
            <input className="inputPadrao-gestao" type="number" placeholder="Matrícula" />
            <input className="inputPadrao-gestao" type="e-mail" placeholder="E-mail" />
            <input className="inputPadrao-gestao" type="text" placeholder="Assunto" />
            <textarea className="inputMensagem-gestao" type="text" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FaleConosco;