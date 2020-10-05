import React from 'react';
import './styles.css';
import emailjs from 'emailjs-com';

function FaleConosco() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_gx9xepg', e.target, 'user_alrGmBA9QeoiJ706pgNOs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (

        <form className="faleConosco-gestao" onSubmit={sendEmail}>
            <h1 id="title">Fale Conosco</h1>
            <input name="nome" className="inputPadrao-gestao" type="text" placeholder="Nome" />
            <input name="matricula" className="inputPadrao-gestao" type="number" placeholder="Matrícula" />
            <input name="email" className="inputPadrao-gestao" type="e-mail" placeholder="Use seu email institucional" />
            <input name="assunto" className="inputPadrao-gestao" type="text" placeholder="Assunto" />
            <textarea name="mensagem" className="inputMensagem-gestao" type="text" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FaleConosco;