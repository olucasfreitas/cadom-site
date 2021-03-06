import React from 'react';
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props) {
  return (
    <Navbar id="navBar" expand="lg">
      <Navbar.Brand id="titleNav" href={props.titlePageNav}>{props.titlePageNav}</Navbar.Brand>
      <Navbar.Toggle id="teste" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="subtitleNav" href={props.NextPage1}>{props.NextPage1}</Nav.Link>
          <Nav.Link id="subtitleNav" href={props.NextPage2}>{props.NextPage2}</Nav.Link>
          <Nav.Link id="subtitleNav" href={props.NextPage3}>{props.NextPage3}</Nav.Link>
          <Nav.Link id="subtitleNav" href={props.NextPage4}>{props.NextPage4}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;