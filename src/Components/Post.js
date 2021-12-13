import React from "react";
// Import Card component from BootStrap
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

export class Post extends React.Component {
  constructor() {
    super();
    this.deletePost = this.deletePost.bind(this);
  }

  // Create a delete method and add to onClick
  deletePost() {
    console.log("Deleted: " + this.props.post._id);

    // Create a DELETE call with Axios that takes in current item ID
    Axios.delete("http://localhost:4000/api/posts/" + this.props.post._id)
      .then(() => {
        // Pass props to realod data using PROPS
        this.props.reloadPosts();
      })
      // Catch any errors and display for debug
      .catch((err) => {
        throw err;
      });
  }

  // Edit Post method
  editPost() {
    Axios.put("http://localhost:4000/api/posts/" + this.props.post_id)
      .then(() => {
        this.props.reloadPosts();
      })
      .catch((err) => {
        throw err;
      });
  }

  // Render method
  render() {
    // Return Card component
    return (
      <div className="mx-5">
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={this.props.post.file} />
          <Card.Body>
            <Card.Title>
              <span>Caught by : </span>
              {this.props.post.name}
            </Card.Title>
            <Card.Text>
              <span>Location : </span>
              {this.props.post.location}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Weight : {this.props.post.weight}</ListGroupItem>
            <ListGroupItem>Length : {this.props.post.length}</ListGroupItem>
            <ListGroupItem>Lure : {this.props.post.lure}</ListGroupItem>
            <ListGroupItem>Comment : {this.props.post.comment}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button onClick={this.deletePost} className="btn btn-danger mx-2">
              Delete
            </Button>
          </Card.Body>
          <Link to={"/edit/" + this.props.post._id} className="btn btn-primary">
            Edit
          </Link>
        </Card>
      </div>
    );
  }
}
