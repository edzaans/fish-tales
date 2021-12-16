// Import React
import React from "react";

// Import Post component
import { Post } from "./Post";

// Main Posts class
export class Posts extends React.Component {
  // Constructor with super() to pass props
  constructor() {
    super();
  }

  // Render method
  render() {
    // Return method with .map() to iterate through received props
    return this.props.posts.map((element, index) => {
      return (
        // Assign each returned element as a prop to Post component
        <Post
          post={element}
          key={index}
          reloadPosts={this.props.reloadPosts}
        ></Post>
      );
    });
  }
}
