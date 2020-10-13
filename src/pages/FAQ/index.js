import React from 'react';
import NavBar from '../../components/NavBar/index';
import './styles.css';
import Footer from '../../components/Footer/index';
import ArticleReduced from '../../components/ArticelReduced/index';
import './styles.css';
import FaleConosco from '../../components/FaleConosco/index.js';


export default function FAQ() {
  return (

    <>
      <NavBar
        titlePageNav="FAQ"
        NextPage1="Home"
        NextPage2="Eventos"
        NextPage3="Gestao"
        NextPage4="Publicações" />

      <div className="containerFAQ">
        <h1 className="titlePageFAQ"> FAQ </h1>

        <ArticleReduced
          title="O que faz um Centro Acadêmico?"
          text="O Centro Acadêmico de Direito Otávio Mendonça, como associação civil sem fins
        lucrativos, autônoma e independente de partidos políticos, representa os discentes
        do curso da graduação em Direito do Centro Universitário do Pará.
        Sendo finalidades do CADOM representar o corpo discente do curso de direito do
        Cesupa em prol dos interesses estudantis; contribuir para a integração dos alunos
        no movimento estudantil; defender a qualidade de ensino e de meios para o
        aprendizado durante o período da graduação; bem como, organizar, desenvolver
        e divulgar eventos e atividades de cunho acadêmico como forma de
        complementação ao curso."
        />
        <ArticleReduced
          title="Como faço para entrar no CADOM?"
          text="A integração de estudantes ao CADOM se dá pela forma democrática da eleição,
        mediante votos dos próprios alunos. Todo estudante do curso é livre para,
        anualmente, no período de eleições, compor sua chapa e concorrer. Os moldes da
        chapa e todos os requisitos são descritos no Estatuto do CADOM, encontrado aqui
        mesmo, no site.
        O CADOM também abre chamadas durante os anos para que você possa entrar
        como colaborador do nosso CA, basta esperar lançar o edital ou algum anúncio
        nosso no instagram @cadomcesupa. No entanto, sempre lembre que apenas por
        fazer parte do corpo estudantil e buscar os seus direitos dentro da instituição isso
        nos mostra que você já faz parte do nosso Centro Acadêmico, nos apoiando na
        nossa jornada."
        />
        <ArticleReduced
          title="Quais seriam outras funções do CADOM?"
          text="Além do que já foi descrito, o CADOM também é encarregado pela promoção da
        JORNADA JURÍDICA de Direito, organização de excursões a eventos jurídicos
        externos, auxílio ao aluno em suas dúvidas e reclamações, realização de
        campanhas beneficientes, como o trote solidário, apoio financeiro e logístico a
        eventos acadêmicos internos, Além, é claro, da manutenção deste site, com
        notícias, materiais para download, agenda de eventos... enfim, muita coisa!"
        />
        <ArticleReduced
          title="Tenho uma reclamação/sugestão ao CADOM, o que devo fazer?"
          text="Entre em contato conosco através do nosso próprio site que iremos receber todas
        as suas dúvidas ou reclamações, nossos Diretores terão o prazer em responder
        você! (ou na dúvida é só reclamar com o Milton)"
        />
        <FaleConosco />
        <Footer />
      </div>
    </>
  )
}