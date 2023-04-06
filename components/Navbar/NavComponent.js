import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from '../../styles/navcomp.module.css'

function NavComponent() {
  return (
    
    
    <Navbar bg="dark" variant="dark"  className={`container ${styles.navContainer}`}>
          <Navbar.Brand href="/" className={styles.navBrand} >Younus.</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio" >Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
      </Navbar>
    
  );
}

export default NavComponent;
