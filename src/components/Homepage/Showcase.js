/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Gallery extends React.Component {
  render() {
    return (
      <section id="showcase" className="pt-5">
        <div className="primary-overlay text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center">
                <h1 className="display-2 mt-5 pt-5">Do What You Dream Of...</h1>
                {/* <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  tempora!
                </p> */}
                <a
                  href="/about"
                  className="btn showcasebtn btn-outline-secondary btn-lg text-white"
                >
                  <i className="fas fa-arrow-right"></i> Read More
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  src={require("./../../assets/img/banner.png")}
                  alt="opus showcase banner"
                  className="img-fluid d-none d-lg-block showcasebanner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
