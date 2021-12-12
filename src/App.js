import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./Images/Header_image.jpg";

import { Home } from "./Components/Home";
import { Posts } from "./Components/Posts";
import { Post } from "./Components/Post";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="50" height="50" alt="" />
            Fish Tales
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/posts">All Posts</Nav.Link>
              <Nav.Link href="/add_post">Add post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/add_post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
