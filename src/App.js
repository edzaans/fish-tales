import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./Images/Header_image.jpg";
import { AllPosts } from "./Components/AllPosts";
import { CreatePost } from "./Components/CreatePost";
import { Edit } from "./Components/Edit";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/posts">All Posts</Nav.Link>
                <Nav.Link href="/create_post">Add post</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          {/* Set PATHS to component */}
          <Route path="/posts" component={AllPosts}></Route>
          <Route path="/create_post" component={CreatePost}></Route>
          <Route path="/edit/:id" component={Edit}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
