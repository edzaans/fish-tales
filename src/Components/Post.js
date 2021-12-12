import React from "react";
import { CreatePost } from "./CreatePost";

export class Post extends React.Component {
  render() {
    return (
      <div>
        This is New Post component <CreatePost />{" "}
      </div>
    );
  }
}
