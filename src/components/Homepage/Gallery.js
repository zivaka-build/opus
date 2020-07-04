import React from "react";

class Gallery extends React.Component {
  render() {
    return (
      <section id="gallery" className="py-5 bg-alabaster">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/1.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/1.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/2.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/2.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/3.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/3.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/4.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/4.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/5.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/5.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/6.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/6.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/7.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/7.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse">
                <a href="img/gallery/8.png" data-toggle="lightbox">
                  <img
                    className="card-img rounded-0"
                    src={require("./../../assets/img/gallery/8.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
