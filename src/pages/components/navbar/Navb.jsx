import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../images/logo_nav.jpeg'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

function Navb() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark-subtle sticky-top">
      <Container>
        <Navbar.Brand href="#home"><img src = {logo} style={{height: "2em"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link><Link to="/" style={{color : "#000000a6", textDecoration: "none"}}>Home</Link></Nav.Link>
            <Nav.Link><HashLink to="/#achieve" scroll={scrollWithOffset} style={{color : "#000000a6", textDecoration: "none"}}> Achievements</HashLink></Nav.Link>
            <Nav.Link><HashLink to="/#projects" scroll={scrollWithOffset} style={{color : "#000000a6", textDecoration: "none"}}> Project</HashLink></Nav.Link>
            <Nav.Link><Link to="/about" style={{color : "#000000a6", textDecoration: "none"}}> About </Link></Nav.Link>
            <Nav.Link><Link to="/members" style={{color : "#000000a6", textDecoration: "none"}}> Members </Link></Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/events" style={{color : "#000000a6", textDecoration: "none"}}>Events</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;