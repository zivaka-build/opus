/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "@reach/router";

class Team extends React.Component {
  render() {
    return (
      <section id="authors" class="py-5 text-center bg-alabaster">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">The Team</h1>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src={require("./../../assets/img/person1.jpg")}
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Susan Williams</h3>
                  <h5 class="text-muted">Lead Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src={require("./../../assets/img/person2.jpg")}
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Grace Smith</h3>
                  <h5 class="text-muted">Co-Writer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src={require("./../../assets/img/person3.jpg")}
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>John Doe</h3>
                  <h5 class="text-muted">Editor</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src={require("./../../assets/img/person4.jpg")}
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Kevin Swanson</h3>
                  <h5 class="text-muted">Designer</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    commodi nostrum, ab libero voluptas officia.
                  </p>
                  <div class="d-flex justify-content-center">
                    <div class="p-4">
                      <a href="http://facebook.com">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://twitter.com">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="http://instagram.com">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
