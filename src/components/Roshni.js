/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Story from "./Homepage/Story";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import Gallery from "./Homepage/Gallery";

const Roshni = () => {
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

            {/* ABOUT SECTION */}
            <OurStory />

            {/* ARTICLES */}
            <Article />

            {/* TEAM */}
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
                                        src={require("./../assets/img/person1.jpg")}
                                        alt=""
                                        class="img-fluid rounded-circle w-50 mb-3"
                                    />
                                    <h3>Susan Williams</h3>
                                    <h5 class="text-muted">Lead Writer</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sed commodi nostrum,
                                        ab libero voluptas officia.
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
                                        src={require("./../assets/img/person2.jpg")}
                                        alt=""
                                        class="img-fluid rounded-circle w-50 mb-3"
                                    />
                                    <h3>Grace Smith</h3>
                                    <h5 class="text-muted">Co-Writer</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sed commodi nostrum,
                                        ab libero voluptas officia.
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
                                        src={require("./../assets/img/person3.jpg")}
                                        alt=""
                                        class="img-fluid rounded-circle w-50 mb-3"
                                    />
                                    <h3>John Doe</h3>
                                    <h5 class="text-muted">Editor</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sed commodi nostrum,
                                        ab libero voluptas officia.
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
                                        src={require("./../assets/img/person4.jpg")}
                                        alt=""
                                        class="img-fluid rounded-circle w-50 mb-3"
                                    />
                                    <h3>Kevin Swanson</h3>
                                    <h5 class="text-muted">Designer</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sed commodi nostrum,
                                        ab libero voluptas officia.
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

            {/* QUOTE SECTION */}
            <Quote />

            {/* STORY */}
            <Story />

            {/* GALLERY */}
            <Gallery />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Roshni;
