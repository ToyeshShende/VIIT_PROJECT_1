//npm install --save-dev @babel/plugin-proposal-private-property-in-object

//npm install bootstrap react-bootstrap
//import css in app.js    import 'bootstrap/dist/css/bootstrap.min.css';   and script in index.js 
/*<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

 <script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>     */


import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profileimg from "../IMG/user_1177568.png";


function NavbarCustom() {
  const expand = false;

  return (
    <Navbar expand={expand} className="bg-primary mb-3">
      <Container fluid>
    
        <Navbar.Toggle className="bg-light" aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Nav className="mx-auto">
          <Navbar.Brand href="#" className="text-light">VIIT PROJECTS</Navbar.Brand>
        </Nav>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              VIIT PROJECTS
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Project">Project</Nav.Link>
              <Nav.Link href="#action2">Connect with domain expert</Nav.Link>

              <Nav.Link href="#action2">Contact</Nav.Link>
              <Nav.Link href="#action2">Logout</Nav.Link>
              
             
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        

        <button className='profilebutton'><img src={profileimg} alt='img' className='profileicon'></img></button>


  
    
        
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
