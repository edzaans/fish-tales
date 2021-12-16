import React from "react";
import axios from "axios";
import { Posts } from "./Posts";
import Styles from "../Styles/Post.module.css";

export class AllPosts extends React.Component {
  constructor() {
    super();
    this.reloadPosts = this.reloadPosts.bind(this);
  }
  // Reload function
  reloadPosts() {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res.data);
      })
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
      // Use it to TEST if state got updated
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

  render() {
    return (
      <div class="container">
        <div class="row">
          <div className="col-12 text-center">
            <h3 className={Styles.form_h3}>Recent catches </h3>
          </div>
          <Posts
            posts={this.state.posts}
            reloadPosts={this.reloadPosts}
          ></Posts>
        </div>
      </div>
    );
  }
}
