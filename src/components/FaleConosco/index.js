import React from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

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

        <form className="faleConosco" onSubmit={sendEmail}>
            <h1 className="title">Fale Conosco</h1>
            <input name="nome" className="inputPadrao" type="text" placeholder="Nome" />
            <input name="matricula" className="inputPadrao" type="number" placeholder="Matrícula" />
            <input name="email" className="inputPadrao" type="e-mail" placeholder="E-mail" />
            <input name="assunto" className="inputPadrao" type="text" placeholder="Assunto" />
            <textarea name="mensagem" className="inputMensagem" type="text" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FaleConosco;