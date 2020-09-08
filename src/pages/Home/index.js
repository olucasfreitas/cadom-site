import React from 'react';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import ArticleResponsive from '../../components/Article-responsive/index';
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
    NextPage4="Publicações"/>

    <div id="container" className="container">
      <h1 className="title-home"> Centro acadêmico de Direito Otávio Mendonça </h1>
      <p  className="text-home">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit cursus in arcu ultrices ut vulputate risus. Orci a commodo ornare diam ac eu, tristique nisl. Velit tempus nulla vitae in tristique. Augue dui proin massa senectus elementum diam.
      </p>

      <Article
        title="Quem Somos"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit cursus in arcu ultrices ut vulputate risus. Orci a commodo ornare diam ac eu, tristique nisl. Velit tempus nulla vitae in tristique. Augue dui proin massa senectus elementum diam.">
      </Article>

      <h1  className="title-home"> Nossos Projetos </h1>

      <ArticleResponsive
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
          necessária, porque juntos somos mais fortes.
  "
        />

      <Article
        title="Qual nosso papel perante os estudantes?"
        description="O Centro Acadêmico de Direito Otávio e Mendonça (CADOM) é a entidade
        representativa dos alunos a qual busca representá-los tanto dentro quanto fora
        universidade, especialmente frente à Coordenação, à Reitoria, aos outros Centros
        Acadêmicos e ante toda à comunidade estudantil do CESUPA. Portanto,
        representamos formalmente os interesses dos estudantes de direito da instituição,
        desde questões mais administrativas da Universidade até questões mais informais 
        como eventos culturais, assuntos comunitários, acadêmicos, políticos e
        estruturais.
        Nosso papel é buscar ser um espaço aberto ao debate, desconstrução e construção
        de novas formas de pensar e enxergar as realidades dos ambientes acadêmico.
        Diante disso, ao preservar tais valores o CADOM espera contar sempre com a
        ajuda dos alunos para construir e aperfeiçoar as condições de ensino do curso de
        Direito, bem como o desenvolvimento cultural e político dos estudantes para
        tornar a experiência acadêmica única e inesquecível para todos">
      </Article>

      <h1  className="title-home"> Membros do CADOM </h1>

      <FaleConosco />
      <Footer />
    </div>
  </>
  )
}
