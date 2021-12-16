// Import React
import React from "react";

// Import Components to be used from BootStrap library
import { Form, Button, Container } from "react-bootstrap";
import Styles from "../Styles/Post.module.css";

// Import axios to communicate with Back End
import axios from "axios";

// Main class for Post Creation
export class CreatePost extends React.Component {
  constructor() {
    super();

    // Bind for each Form element
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeLength = this.onChangeLength.bind(this);
    this.onChangeLure = this.onChangeLure.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);

    // Set initial state with properties to be stored
    this.state = {
      Name: "",
      Location: "",
      Weight: 0,
      Length: 0,
      Lure: "",
      Comment: "",
      Date: new Date(),
      Url: "",
      /* File: "", */
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

  onChangeDate(el) {
    this.setState({ Date: el.target.value });
  }

  onChangeUrl(el) {
    this.setState({ Url: el.target.value });
  }

  // Submit function here
  onSubmit(el) {
    // Prevents page reload when form is submitted
    //el.preventDefault();
    alert(`New catch added by : ${this.state.Name}`);

    // New post object sent with Axios
    const newPost = {
      name: this.state.Name,
      location: this.state.Location,
      weight: this.state.Weight,
      length: this.state.Length,
      lure: this.state.Lure,
      comment: this.state.Comment,
      date: this.state.Date,
      url: this.state.Url,
      /* file: this.state.File, */
    };

    // POST method to server
    axios
      .post("http://localhost:4000/api/posts", newPost)
      // Promise call
      .then((response) => {
        console.log(response);
      })
      // Catch block
      .catch((err) => {
        console.log("Error in sending data" + err);
      });
  }

  // Render method
  render() {
    return (
      <div>
        {/* Main content starts here */}
        <Container>
          <div className="row mx-auto">
            <div className="col-12 text-center">
              <h3 className={Styles.form_h3}>Post your catch here </h3>
            </div>
            <div
              class="col-sm-12 col-md-6 mx-auto"
              className={Styles.form_body}
            >
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
                  <Form.Label>
                    Comment <small>: Restricted to 250 characters</small>
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={this.state.Comment}
                    onChange={this.onChangeComment}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Date of catch</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.Date}
                    onChange={this.onChangeDate}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="url">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.Url}
                    onChange={this.onChangeUrl}
                  />
                </Form.Group>

                <Button variant="success" type="submit" value="add">
                  Add Your Catch
                </Button>
              </Form>
            </div>
          </div>
        </Container>
        {/* Main content ends here */}
      </div>
    );
  }
}
