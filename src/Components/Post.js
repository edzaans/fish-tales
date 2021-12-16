import React from "react";
// Import Card component from BootStrap
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
// Import Link to navigate to other pages
import { Link } from "react-router-dom";
// Import axios
import Axios from "axios";
// Import Styles file
import Styles from "../Styles/Post.module.css";

// Main Single Post class
export class Post extends React.Component {
  // Constructor and super() to receive props
  constructor() {
    super();
    // Bind THIS to event
    this.deletePost = this.deletePost.bind(this);
  }

  // Create a delete method and add to onClick
  deletePost() {
    console.log("Deleted: " + this.props.post._id);

    // Create a DELETE call with Axios that takes in current item ID
    Axios.delete("http://localhost:4000/api/posts/" + this.props.post._id)
      // Resolved promise
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
    // HTTP PUT method sent to server with props
    Axios.put("http://localhost:4000/api/posts/" + this.props.post_id)
      // Resolved promise
      .then(() => {
        this.props.reloadPosts();
      })
      // Error catch block
      .catch((err) => {
        throw err;
      });
  }

  // Render method
  render() {
    // Return Card component
    return (
      <div class="mt-5" className={Styles.post}>
        <div
          class="col-sm-12 col-md-8 col-lg-8 mx-auto"
          className={Styles.card_body}
        >
          <Card>
            <Card.Img
              className={Styles.post_img}
              variant="top"
              src={this.props.post.url}
            />
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
              <ListGroupItem>
                Weight : {this.props.post.weight} gr
              </ListGroupItem>
              <ListGroupItem>
                Length : {this.props.post.length} cm
              </ListGroupItem>
              <ListGroupItem>Lure : {this.props.post.lure}</ListGroupItem>
              <ListGroupItem>Date : {this.props.post.date}</ListGroupItem>
            </ListGroup>
            <Card.Body class="mx-auto">
              <div>
                <h4>User comment</h4>
                <div className={Styles.post_comment}>
                  {this.props.post.comment}
                </div>
              </div>
              <Button
                onClick={this.deletePost}
                className="btn btn-danger mx-2 my-2"
              >
                Delete
              </Button>
              <Link
                to={"/edit/" + this.props.post._id}
                className="btn btn-primary"
              >
                Edit
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
