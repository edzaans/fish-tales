import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Post } from "./Post";

export class Posts extends React.Component {
  constructor() {
    super();
  }

  // Render method
  render() {
    return this.props.posts.map((element, index) => {
      return (
        <Post
          post={element}
          key={index}
          reloadPosts={this.props.reloadPosts}
        ></Post>
      );
    });
  }
}
