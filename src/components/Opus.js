/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Story from "./Homepage/Story";
import LogosPanel from "./Homepage/LogosPanel";
import Contact from "./Homepage/Contact";
import Involve from "./Homepage/Involve";
import Footer from "./Homepage/Footer";

const Opus = () => {
    return (
        <Fragment>
            
            {/* NavBar */}
            <Nav />

            {/* SHOWCASE */}
            <section id="showcase" className="pt-5">
                <div className="primary-overlay text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center">
                                <h1 className="display-2 mt-5 pt-5">
                                    Do What You Dream Of...
                                </h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nam, tempora!
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-outline-secondary btn-lg text-white"
                                >
                                    <i className="fas fa-arrow-right"></i> Read
                                    More
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={require("./../assets/img/book.png")}
                                    alt=""
                                    className="img-fluid d-none d-lg-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <Quote />

            {/* BOXES */}
            <LogosPanel />

            {/* ARTICLES */}
            <Article />

            {/* STORY */}
            <Story />

            {/* DONATE NOW & VOLUNTEER SECTION */}
            <Involve />

            <section id="gallery" className="py-5 bg-alabaster">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/1.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/1.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/2.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/2.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/3.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/3.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/4.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/4.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/5.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/5.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/6.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/6.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/7.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/7.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <a
                                    href="img/gallery/8.png"
                                    data-toggle="lightbox"
                                >
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/8.png")}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section
                id="testimonials"
                className="py-5 text-center bg-white text-black"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 test-left">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel-left">
                                <img
                                    src={require("./../assets/img/Group 8.png")}
                                    alt=""
                                    className="img-fluid rounded-circle mb-2"
                                />
                                <h4>Sayanti Mukherjee</h4>
                                <small>Freelance Writer, Kolkata</small>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-5 panel-right">
                                <p>
                                    “Really appreciate what We Care has tried to
                                    do and has done.. At such a time as this
                                    (the Covid 19 crisis) it's people like you
                                    that make a difference.. Kudos to your team”
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 test-right">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-5 panel-left">
                                <p>
                                    “Small efforts can make small differences
                                    here in the time of Universal crisis. Be
                                    kind to each other dor a better tomorrow”
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel-right">
                                <img
                                    src={require("./../assets/img/Group 7.png")}
                                    alt=""
                                    className="img-fluid rounded-circle mb-2"
                                />
                                <h4>Pavel Banerjee</h4>
                                <small> Businessman, Kolkata</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
            

            {/* VIDEO MODAL SECTION */}
            {/* <div className="modal fade" id="videoModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                            <iframe
                                title="iframe#1"
                                // src=""
                                width="100%"
                                height="308"
                                style={{ border: "none", overflow: "hidden" }}
                                // style="border:none;overflow:hidden"
                                scrolling="no"
                                frameborder="0"
                                allowTransparency="true"
                                allowFullScreen="true"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment>
    );
};

export default Opus;
