// Import React
import React from "react";
import { Carousel, Container } from "react-bootstrap";

// import images from Images Folder
import trout from "../Images/trout.jpg";
import lake from "../Images/lake.jpg";
import fly from "../Images/fly.jpg";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import pic6 from "../Images/pic6.jpg";

// Main component class for Landing page
export class Home extends React.Component {
  // Render method
  render() {
    // Return method
    return (
      <div>
        {/* Carousel starts here */}
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 fluid" src={lake} alt="First slide" />
            <Carousel.Caption>
              <h3>One of the best lakes in Europe</h3>
              <p>Looking for best Trout spots in Europe?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 fluid" src={fly} alt="Second slide" />

            <Carousel.Caption>
              <h3>Prime Fly Fishing location</h3>
              <p>lakes Corrib and Mask offer bes Fly Fishing spots in Europe</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fluid"
              src={trout}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Wild Brown Trout</h3>
              <p>One of the hardest figting game fish...</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* Carousel ends here */}

        {/* Main content section starts here */}
        <section>
          <main id="main" role="main">
            <section class="jumbotron text-center" id="mainBanner">
              <div class="container mt-5">
                <h1 class="jumbotron-heading">Share your experience</h1>
                <p class="lead text-muted">
                  Share your photos or videos from your fishing trips here
                </p>
                <p>
                  <a href="/create_post" class="btn btn-success mx-2 my-2">
                    Post catch
                  </a>
                </p>
              </div>
            </section>

            <div class="album py-5 bg-light">
              <div class="container">
                <div class="row">
                  <div
                    class="col-md-12 text-center mb-5"
                    id="collection-heading"
                  >
                    <h3>Album</h3>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        src={pic1}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">12 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        src={pic2}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">12 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        src={pic4}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">12 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        src={pic5}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">12 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        src={pic6}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">12 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img
                        class="card-img-top"
                        src={pic3}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">12 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
        {/* Main content section ends here */}
      </div>
    );
  }
}
