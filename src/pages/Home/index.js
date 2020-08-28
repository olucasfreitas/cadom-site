import React from 'react';
import FaleConosco from '../../components/Fale-conosco/index.js';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap';


export default function Home() {

  return (
    <>
    <Navbar expand="lg">
      <Navbar.Brand id="title-nav" href="#home">Home</Navbar.Brand>
      <Navbar.Toggle id="teste" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="title-nav" href="#link">FAQ</Nav.Link>
          <Nav.Link id="title-nav" href="#link">Gestão</Nav.Link>
          <Nav.Link id="title-nav" href="#link">Eventos</Nav.Link>
          <Nav.Link id="title-nav" href="#link">Publicações</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div id="container">
      <h1> Centro acadêmico de Direito Otávio Mendonça </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit cursus in arcu ultrices ut vulputate risus. Orci a commodo ornare diam ac eu, tristique nisl. Velit tempus nulla vitae in tristique. Augue dui proin massa senectus elementum diam.
      </p>

      <Article
        title="Quem Somos"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit cursus in arcu ultrices ut vulputate risus. Orci a commodo ornare diam ac eu, tristique nisl. Velit tempus nulla vitae in tristique. Augue dui proin massa senectus elementum diam.">
      </Article>

      <h1> Nossos Projetos </h1>

      <Article
        title="Trote Solidário"
        description="Nosso trote solidário veio para inovar todas as dinâmicas ocorridas dentro
        das universidades. Ao invés do calouro receber o famoso e temido “Trote”,
        ele pode estar sendo responsável por acrescentar academicamente na vida
        de tantos outros jovens, ao se disponibilizar para a doação de livros,
        apostilas e materiais do ensino médio ou de qualquer tipo, os quais não
        utiliza mais, para que ocorra a disseminação do conhecimento de um aluno
        para o outro. "
      ></Article>

      <Article
        title="Apadrinhamento"
        description="O Apadrinhamento é um projeto proporcionado por nosso Centro
        Acadêmico, o qual dentre os diversos veteranos candidatos do polo é 
        escolhido um para apadrinhar algum calouro e ser uma forma de orientador
        nesse momento inicial, sendo responsável por ajudar seu afilhado sobre
        tudo o que acontece de mais importante na faculdade. ">
      </Article>

      <Article
        title="Colaboradores"
        description="Os Colaboradores são alunos selecionados pelo Centro Acadêmico de
        todos os semestres de direito, os quais possuem o intuito de fazer parte da
        nossa Família Cadom, para auxiliar em todas as demandas que temos
        dentro do corpo estudantil. Sua ajuda é muito bem vinda e sempre
        necessária, porque juntos somos mais fortes.">
      </Article>

      <h1> Qual nosso papel perante os estudantes? </h1>
      <Article
        title=""
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

      <h1> Membros do CADOM </h1>

      <FaleConosco />
      <Footer />
    </div>
  </>
  )
}
