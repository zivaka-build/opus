import React from "react";

class Testimonial extends React.Component {
    render() {
        return (
            <div>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    {/* <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol> */}
                    {/*Slides*/}
                    <div className="carousel-inner" role="listbox">
                        {/*First slide*/}
                        <div className="carousel-item active">
                            <div className="testimonial">
                                {/*Avatar*/}
                                <div className="avatar mb-4">
                                    <p className="text-center">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            className="rounded-circle img-fluid avatar-image"
                                            alt="First sample avatar image"
                                        />
                                    </p>
                                </div>
                                {/*Content*/}
                                <div className="container">
                                    <p className="textimonial-text text-justify">
                                        <i className="fas fa-quote-left" />{" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quod eos id officiis
                                        hic tenetur Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Quod eos
                                        id officiis hic tenetur
                                        <i className="fas fa-quote-right" />
                                    </p>
                                </div>
                                <h4 className="font-weight-bold text-center">
                                    Anna Deynah
                                </h4>
                                <h6 className="font-weight-bold my-3 text-center">
                                    Founder at ET Company
                                </h6>
                                {/*Review*/}
                                {/* <i class="fas fa-star blue-text"> </i>
                <i class="fas fa-star blue-text"> </i>
                <i class="fas fa-star blue-text"> </i>
                <i class="fas fa-star blue-text"> </i>
                <i class="fas fa-star-half-alt blue-text"> </i> */}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial">
                                {/*Avatar*/}
                                <div className="avatar mb-4">
                                    <p className="text-center">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            className="rounded-circle img-fluid avatar-image"
                                            alt="First sample avatar image"
                                        />
                                    </p>
                                </div>
                                {/*Content*/}
                                <div className="container">
                                    <p className="textimonial-text text-justify">
                                        <i className="fas fa-quote-left" />{" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quod eos id officiis
                                        hic tenetur Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Quod eos
                                        id officiis hic tenetur
                                        <i className="fas fa-quote-right" />
                                    </p>
                                </div>
                                <p className="text-center"></p>
                                <h4 className="font-weight-bold text-center">
                                    Anna Deynah
                                </h4>
                                <h6 className="font-weight-bold my-3 text-center">
                                    Founder at ET Company
                                </h6>
                                <p />
                                {/*Review*/}
                                {/* <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star-half-alt blue-text"> </i> */}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="testimonial">
                                {/*Avatar*/}
                                <div className="avatar mb-4">
                                    <p className="text-center">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                            className="rounded-circle img-fluid avatar-image"
                                            alt="First sample avatar image"
                                        />
                                    </p>
                                </div>
                                {/*Content*/}
                                <div className="container">
                                    <p className="textimonial-text text-justify">
                                        <i className="fas fa-quote-left" />{" "}
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quod eos id officiis
                                        hic tenetur Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Quod eos
                                        id officiis hic tenetur
                                        <i className="fas fa-quote-right" />
                                    </p>
                                </div>
                                <p className="text-center"></p>
                                <h4 className="font-weight-bold text-center">
                                    Anna Deynah
                                </h4>
                                <h6 className="font-weight-bold my-3 text-center">
                                    Founder at ET Company
                                </h6>
                                <p />
                                {/*Review*/}
                                {/* <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star blue-text"> </i>
                  <i class="fas fa-star-half-alt blue-text"> </i> */}
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Testimonial;
