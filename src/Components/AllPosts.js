// Import React
import React from "react";
// Import axios
import axios from "axios";
// Import Posts component
import { Posts } from "./Posts";
// Import Styles file
import Styles from "../Styles/Post.module.css";

// Main AllPosts class
export class AllPosts extends React.Component {
  // Add constructor and super() to pass props
  constructor() {
    super();
    // Reload method binding
    this.reloadPosts = this.reloadPosts.bind(this);
  }
  // Reload function
  reloadPosts() {
    // Use axios here to pull data from server
    axios
      .get("http://localhost:4000/api/posts")
      // Resolved promise block
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res.data);
      })
      // Error catch block
      .catch((err) => {
        console.log("Oh ohh, error in request", err);
      });
  }
  // Set empty sate to store data coming back from server
  state = {
    posts: [],
    test: "",
  };

  // Use componentDidMount() as a constructor
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/posts")
      // If Promise resolved run this...
      .then((res) => {
        // Update state with resolved promise data
        this.setState({ posts: res.data });
        // Test if data came back from API
        console.log(res.data);
      })
      // Use it to TESTING ONLY!!!! if state got updated
      .then(() => {
        this.setState({ test: "Data came back OK!!!" });
        console.log(this.state.test);
      })
      // Catch an error if Promise rejected
      .catch((err) => {
        // Log rejection error for testing
        console.log("Oh ohh, error in request", err);
      });
  }

  // Render method
  render() {
    // Wrap Posts components returned in Bootstrap Container for styling
    return (
      <div class="container">
        <div class="row">
          <div className="col-12 text-center">
            <h3 className={Styles.form_h3}>Recent catches </h3>
          </div>
          {/* Pass props to Posts component */}
          <Posts
            posts={this.state.posts}
            reloadPosts={this.reloadPosts}
          ></Posts>
        </div>
      </div>
    );
  }
}
