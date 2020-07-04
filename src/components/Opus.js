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
import Gallery from "./Homepage/Gallery";
import Testimonials from "./Homepage/Testimonials";

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

            {/* GALLERY */}
            <Gallery />

            {/* TESTIMONIALS SECTION */}
            <Testimonials />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Opus;
