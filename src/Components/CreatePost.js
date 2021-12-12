import React from "react";
// Import Components to be used from BootStrap library
import { Form, Button, Container } from "react-bootstrap";
// Import axios to communicate with Back End
import axios from "axios";

export class CreatePost extends React.Component {
  constructor() {
    super();

    // Bind form events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeLength = this.onChangeLength.bind(this);
    this.onChangeLure = this.onChangeLure.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);

    // Set initial state with properties to be stored
    this.state = {
      Name: "",
      Location: "",
      Weight: 0,
      Length: 0,
      Lure: "",
      Comment: "",
      File: "",
    };
  }

  // onChange functions for form Elements
  onChangeName(el) {
    this.setState({ Name: el.target.value });
  }

  onChangeLocation(el) {
    this.setState({ Location: el.target.value });
  }

  onChangeWeight(el) {
    this.setState({ Weight: el.target.value });
  }

  onChangeLength(el) {
    this.setState({ Length: el.target.value });
  }

  onChangeLure(el) {
    this.setState({ Lure: el.target.value });
  }

  onChangeComment(el) {
    this.setState({ Comment: el.target.value });
  }

  onChangeFile(el) {
    this.setState({ File: el.target.value });
  }

  // Submit function here
  onSubmit(el) {
    // Prevents page reload when form is submitted
    // el.preventDefault();
    alert(`New catch added by : ${this.state.Name}`);

    // New post object sent with Axios
    const newPost = {
      name: this.state.Name,
      location: this.state.Location,
      weight: this.state.Weight,
      length: this.state.Length,
      lure: this.state.Lure,
      comment: this.state.Comment,
      file: this.state.File,
    };

    // POST method to server
    axios
      .post("http://localhost:4000/api/posts", newPost)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Error in sending data" + err);
      });
  }

  render() {
    return (
      <div>
        <Container>
          {/* Working Form with BootStrap styles */}
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Name}
                onChange={this.onChangeName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Location}
                onChange={this.onChangeLocation}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="weight">
              <Form.Label>Weight : gr</Form.Label>
              <Form.Control
                type="number"
                value={this.state.Weight}
                onChange={this.onChangeWeight}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
              <Form.Label>Length : cm</Form.Label>
              <Form.Control
                type="number"
                value={this.state.Length}
                onChange={this.onChangeLength}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lure">
              <Form.Label>Lure / fly model</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Lure}
                onChange={this.onChangeLure}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.Comment}
                onChange={this.onChangeComment}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
              <Form.Label>Upload your file</Form.Label>
              <Form.Control
                type="file"
                value={this.state.File}
                onChange={this.onChangeFile}
              />
            </Form.Group>

            <Button variant="primary" type="submit" value="add">
              Add Your Catch
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
