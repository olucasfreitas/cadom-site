import React from 'react';
import './styles.css';

function FaleConosco(){
    return(

        <div id="faleConosco-gestao">
            <h2 id="textContainer-title">Fale Conosco</h2>

                <input id="inputPadrao-gestao" type="text" placeholder="Nome"/>
                <input id="inputPadrao-gestao" type="text" placeholder="Matrícula"/>
                <input id="inputPadrao-gestao" type="text" placeholder="E-mail"/>

                <select id="inputSelect-gestao">
                    <option value="Falar merda">Falar merda</option>
                    <option value="Falar menos merda">Falar menos merda</option>
                    <option value="Nao falar merda">Nao falar merda</option>
                </select>

                <textarea id="inputMensagem-gestao" type="text" placeholder="Mensagem"/>
      </div>
    );
}

export default FaleConosco;