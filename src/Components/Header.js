// Import React
import React from "react";
// Import Bootstrap Components
import { Container, Navbar, Nav } from "react-bootstrap";
// Import logo picture
import logo from "../Images/Header_image.jpg";

// Main Header class
export class Header extends React.Component {
  // Main RENDER method
  render() {
    return (
      <div class="container fluid">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} width="50" height="50" alt="" />
              Fish Tales
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/posts">Posts</Nav.Link>
                <Nav.Link href="#pricing">Add post</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
