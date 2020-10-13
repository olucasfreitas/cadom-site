import React from 'react';
import FaleConosco from '../../components/FaleConosco/index.js';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import BigArticleResponsive from '../../components/BigArticleResponsive/index';
import NavBar from '../../components/NavBar/index';
import './styles.css';



export default function Home() {

  return (
    <>
      <NavBar
        titlePageNav="Home"
        NextPage1="Eventos"
        NextPage2="FAQ"
        NextPage3="Gestao"
        NextPage4="Publicações" />

      <div className="containerHome">
        <h1 className="titleHome"> Centro Acadêmico de Direito Otávio Mendonça </h1>
        <p className="textHome">
          O CADOM é uma entidade formada por alunos a qual representa academicamente
          todos os estudantes do curso de Direito do CESUPA.
      </p>

        <Article
          title="Quem Somos"

          description1="O Centro Acadêmico de Direito Otávio Mendonça visa manter com os discentes,
        um canal direto e permanente de contato, realizando discussões, debates, reuniões,
        da maneira mais democrática e aberta possível, para que todos possam se sentir
        representados e possuam a plena liberdade de participar ativamente."

          description2="Ademais, o Centro Acadêmico é o responsável por fiscalizar as atividades da
        instituição de maneira íntegra e transparente ao lutar contra as ações que interfiram
        os direitos do corpo estudantil."

          description3="Por fim, o CADOM observa as formas de aplicação dos recursos e a transparência
        da Coordenação do curso, lutando sempre contra todo o tipo de desigualdade e
        injustiça dentro da universidade sobre os mais diversos âmbitos.">
        </Article>

        <h1 className="titleHomeProjetos"> Nossos Projetos </h1>

        <BigArticleResponsive
          link1=""
          title1="Trote Solidário"
          description1="Nosso trote solidário veio para inovar todas as dinâmicas ocorridas dentro
          das universidades. Ao invés do calouro receber o famoso e temido “Trote”,
          ele pode estar sendo responsável por acrescentar academicamente na vida
          de tantos outros jovens, ao se disponibilizar para a doação de livros,
          apostilas e materiais do ensino médio ou de qualquer tipo, os quais não
          utiliza mais, para que ocorra a disseminação do conhecimento de um aluno
          para o outro."

          link2=""
          title2="Apadrinhamento"
          description2="O Apadrinhamento é um projeto proporcionado por nosso Centro
          Acadêmico, o qual dentre os diversos veteranos candidatos do polo é 
          escolhido um para apadrinhar algum calouro e ser uma forma de orientador
          nesse momento inicial, sendo responsável por ajudar seu afilhado sobre
          tudo o que acontece de mais importante na faculdade. "

          link=""
          title3="Colaboradores"
          description3="Os Colaboradores são alunos selecionados pelo Centro Acadêmico de
          todos os semestres de direito, os quais possuem o intuito de fazer parte da
          nossa Família Cadom, para auxiliar em todas as demandas que temos
          dentro do corpo estudantil. Sua ajuda é muito bem vinda e sempre
          necessária, porque juntos somos mais fortes."
        />

        <Article
          title="Qual nosso papel perante os estudantes?"

          description1="O Centro Acadêmico de Direito Otávio e Mendonça (CADOM) é a entidade
        representativa dos alunos a qual busca representá-los tanto dentro quanto fora
        universidade, especialmente frente à Coordenação, à Reitoria, aos outros Centros
        Acadêmicos e ante toda à comunidade estudantil do CESUPA. Portanto,
        representamos formalmente os interesses dos estudantes de direito da instituição,
        desde questões mais administrativas da Universidade até questões mais informais 
        como eventos culturais, assuntos comunitários, acadêmicos, políticos e
        estruturais."

          description2="Nosso papel é buscar ser um espaço aberto ao debate, desconstrução e construção
        de novas formas de pensar e enxergar as realidades dos ambientes acadêmico.
        Diante disso, ao preservar tais valores o CADOM espera contar sempre com a
        ajuda dos alunos para construir e aperfeiçoar as condições de ensino do curso de
        Direito, bem como o desenvolvimento cultural e político dos estudantes para
        tornar a experiência acadêmica única e inesquecível para todos">
        </Article>

        <FaleConosco />
        <Footer />
      </div>
    </>
  )
}
