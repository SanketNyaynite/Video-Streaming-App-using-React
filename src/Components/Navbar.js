import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';

function Navbar() {
  return (
    <div className="App">
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <ReactBootstrap.Navbar.Brand href="home">Video Streaming</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
    <ReactBootstrap.Nav.Link href="home">Home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="MoviesList">Movies</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="SeriesList">Series</ReactBootstrap.Nav.Link>
      
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Navbar.Brand href="login">Login</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Nav.Link href="home">Start a free trial</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    
    </div>
  );
}

export default Navbar;