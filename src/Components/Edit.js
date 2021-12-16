// Import React
import React from "react";

// Import Components to be used from BootStrap library
import { Form, Button, Container } from "react-bootstrap";
// Import axios to communicate with Back End
import axios from "axios";

// Main Edit class
export class Edit extends React.Component {
  // Constructor and super() to receive props
  constructor() {
    super();

    // Bind all form events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeLength = this.onChangeLength.bind(this);
    this.onChangeLure = this.onChangeLure.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);

    // Set initial state with properties to be stored
    this.state = {
      Name: "",
      Location: "",
      Weight: 0,
      Length: 0,
      Lure: "",
      Comment: [],
      /*      Date: new Date(),
      File: "", */
    };
  }

  // didMount function  to be run when component is activated
  componentDidMount() {
    // Test what data is passed
    console.log(this.props.match.params.id);
    // Get request from server with matched params
    axios
      // HTTP GET method to server
      .get("http://localhost:4000/api/posts/" + this.props.match.params.id)
      // Promise resolved successfully
      .then((response) => {
        // Set returned data to Component State
        this.setState({
          // Add ID to state to use for post finding with ID param
          _id: response.data._id,
          Name: response.data.name,
          Location: response.data.location,
          Weight: response.data.weight,
          Length: response.data.length,
          Lure: response.data.lure,
          Comment: response.data.comment,
          Date: response.data.date,
          File: response.data.file,
        });
      })
      // Error catch block
      .catch((err) => {
        console.log(err);
      });
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

  onChangeDate(el) {
    this.setState({ Date: el.target.value });
  }

  onChangeFile(el) {
    this.setState({ File: el.target.value });
  }

  // Submit function here
  onSubmit(el) {
    // Prevents page reload when form is submitted
    el.preventDefault();
    alert(`Post edited : ${this.state.Name}`);

    // New post object sent with Axios to MongoDB
    const newPost = {
      name: this.state.Name,
      location: this.state.Location,
      weight: this.state.Weight,
      length: this.state.Length,
      lure: this.state.Lure,
      comment: this.state.Comment,
      _id: this.state._id,
      date: this.state.Date,
      file: this.state.File,
    };

    // EDIT method to server
    axios
      // HTTP PUT method to server
      .put("http://localhost:4000/api/posts/" + this.state._id, newPost)
      // Promise resolved
      .then((res) => console.log(res.data))
      // Error catch block
      .catch((err) => {
        throw err;
      });
  }

  // Main RENDER method
  render() {
    return (
      <div>
        {/* Form for Edit Component */}
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

            <Button variant="primary" type="submit" value="Edit post">
              Edit Post
            </Button>
            {/*    <Button variant="primary" type="submit" value="Edit Post">
              Add comment
            </Button> */}
          </Form>
        </Container>
      </div>
    );
  }
}
