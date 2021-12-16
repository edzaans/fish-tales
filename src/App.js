// Import React
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

// Imports logo from Images Folder
import logo from "./Images/Header_image.jpg";

// Import all Components
import { AllPosts } from "./Components/AllPosts";
import { CreatePost } from "./Components/CreatePost";
import { Edit } from "./Components/Edit";
import { Home } from "./Components/Home";
// Import App css
import "./App.css";

// Import React components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Main App function....all code goes here
function App() {
  return (
    <div>
      {/* Use Router to navigate */}
      <Router>
        {/* Create navbar to be displayed in Root  */}
        <Navbar
          className="px-2"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand class="mx-2" href="/">
            <img src={logo} width="50" height="50" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-2">
              <Nav.Link href="/">FishTales</Nav.Link>

              <Nav.Link href="/posts">All Posts</Nav.Link>
              <Nav.Link href="/create_post">Add post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* Set up Switch and Routes for navigation */}
        <Switch>
          {/* Set PATHS to components */}
          <Route path="/" component={Home} exact></Route>
          <Route path="/posts" component={AllPosts}></Route>
          <Route path="/create_post" component={CreatePost}></Route>
          <Route path="/edit/:id" component={Edit}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
