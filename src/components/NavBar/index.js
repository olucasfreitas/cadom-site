import React from 'react';
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props){
    return(
        <Navbar id="navbar" expand="lg">
        <Navbar.Brand id="title-nav" href="/">Home</Navbar.Brand>
        <Navbar.Toggle id="teste" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="subtitle-nav" href="Eventos">Eventos</Nav.Link>
            <Nav.Link id="subtitle-nav" href="FAQ">FAQ</Nav.Link>
            <Nav.Link id="subtitle-nav" href="Gestao">Gestão</Nav.Link>
            <Nav.Link id="subtitle-nav" href="Publicacoes">Publicações</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;