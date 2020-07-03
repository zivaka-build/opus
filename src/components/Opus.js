/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Opus = () => {
    return (
        <body id="home" data-spy="scroll" data-target="#main-nav">
            <div id="root"></div>
            <nav
                className="navbar navbar-expand-md navbar-light fixed-top bg-alabaster"
                id="main-nav"
            >
                <div className="container">
                    <a href="opus.html" className="navbar-brand">
                        <img
                            src={require("./../assets/img/opus.png")}
                            width="100"
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="opus.html">
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Verticals
                                </a>
                                <div
                                    className="dropdown-menu bg-alabaster"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <a
                                        className="dropdown-item"
                                        href="roshni.html"
                                    >
                                        Roshni
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="metR.html"
                                    >
                                        MetR
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="ashakiran.html"
                                    >
                                        AshaKiran
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    About Us
                                </a>
                                <div
                                    className="dropdown-menu bg-alabaster"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <a
                                        className="dropdown-item"
                                        href="our_story.html"
                                    >
                                        Our Story
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="our_team.html"
                                    >
                                        Our Team
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="legal_financial.html"
                                    >
                                        Legal & Financial
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="contact_us.html"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="media_center.html"
                                >
                                    Media Center
                                </a>
                            </li>
                        </ul>
                        <a
                            href="https://rzp.io/l/jvLArNx"
                            target="_blank"
                            className="btn py-0"
                            style={{ cursor: "pointer" }}
                            // style="cursor: pointer;"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={require("./../assets/img/donate_now.png")}
                                width="160"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </nav>

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
            <section
                id="quote"
                className="py-4 text-center bg-d-gray text-white"
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="info-header">
                                <p className="lead font-monte font-size-16">
                                    "It is a privilege to serve mankind, for
                                    this is the worship of God. God is here, in
                                    all these human souls. He is the soul of
                                    living being."
                                </p>
                                <h5 className="font-lato">Swami Vivekananda</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOXES */}
            <section id="boxes" className="pt-5 bg-alabaster">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="roshni.html" target="_blank">
                                <div className="card text-center text-white mb-resp">
                                    <div className="card-body">
                                        <img
                                            src={require("./../assets/img/roshni.png")}
                                            alt="Roshni"
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="metR.html" target="_blank">
                                <div className="card text-center mb-resp">
                                    <div className="card-body">
                                        <img
                                            src={require("./../assets/img/metr.png")}
                                            alt="MetR"
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="ashakiran.html" target="_blank">
                                <div className="card text-center text-white">
                                    <div className="card-body">
                                        <img
                                            src={require("./../assets/img/asha_kiran.png")}
                                            alt="Asha Kiran"
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="article" className="pt-5 bg-alabaster">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover2">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/9.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <a
                                            href="#"
                                            className="video"
                                            data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                            data-toggle="modal"
                                            data-target="#videoModal"
                                        >
                                            <i className="fas fa-play fa-3x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover12">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/10.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <h4 className="card-title">
                                            Card title
                                        </h4>
                                        <p className="card-text text-white">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <p className="card-text text-white">
                                            <small>
                                                Last updated 5 mins ago
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover2">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/11.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <a
                                            href="#"
                                            className="video"
                                            data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                            data-toggle="modal"
                                            data-target="#videoModal"
                                        >
                                            <i className="fas fa-play fa-3x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover12">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/12.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <h4 className="card-title">
                                            Card title
                                        </h4>
                                        <p className="card-text text-white">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <p className="card-text text-white">
                                            <small>
                                                Last updated 5 mins ago
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover12">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/13.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <h4 className="card-title">
                                            Card title
                                        </h4>
                                        <p className="card-text text-white">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <p className="card-text text-white">
                                            <small>
                                                Last updated 5 mins ago
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover2">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/14.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <a
                                            href="#"
                                            className="video"
                                            data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                            data-toggle="modal"
                                            data-target="#videoModal"
                                        >
                                            <i className="fas fa-play fa-3x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover12">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/15.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <h4 className="card-title">
                                            Card title
                                        </h4>
                                        <p className="card-text text-white">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <p className="card-text text-white">
                                            <small>
                                                Last updated 5 mins ago
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card-inverse">
                                <div className="hover ehover2">
                                    <img
                                        className="card-img rounded-0"
                                        src={require("./../assets/img/gallery/16.png")}
                                        alt=""
                                    />
                                    <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                        <a
                                            href="#"
                                            className="video"
                                            data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                            data-toggle="modal"
                                            data-target="#videoModal"
                                        >
                                            <i className="fas fa-play fa-3x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section id="story" className="bg-alabaster">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-6  col-md-6 col-12">
                            <img
                                src={require("./../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6  col-md-6 col-12">
                            <p>
                                {" "}
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly.
                            </p>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-6  col-md-6 col-12 mb-5">
                            <p>
                                {" "}
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly.
                            </p>
                        </div>
                        <div className="col-lg-6  col-md-6 col-12">
                            <img
                                src={require("./../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                                className="img-fluid "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* DONATE NOW & VOLUNTEER SECTION */}
            <section id="faq" className="pt-5 bg-alabaster txt-r-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5 faq-left">
                            <div className="card">
                                <div className="card-body">
                                    <a
                                        href="https://rzp.io/l/jvLArNx"
                                        target="_blank"
                                        className="btn btn-primary bg-g-crayola mb-3"
                                        rel="noopener noreferrer"
                                    >
                                        Donate Now
                                    </a>
                                    <p>
                                        We Care is a project of the Opus
                                        Foundation, a registered Trust with 80G
                                        Registration
                                    </p>
                                    <p>
                                        For 80G Certificate and official
                                        receipt, please drop us a mail at
                                        theopusfoundation@gmail.com with your
                                        Name, Pan Card no. and email id
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <a
                                        href="#"
                                        className="btn btn-primary bg-g-crayola mb-3"
                                    >
                                        Volunteer
                                    </a>
                                    <p>
                                        A nonprofit is as strong as the
                                        community that holds it up. Together, we
                                        can do more than we can do alone. Let's
                                        bring our abilities and passions
                                        together to affect real change. There
                                        are many ways to support our mission.
                                        Contact us to find out more about
                                        opportunities. We welcome ideas and
                                        initiatives and will also give
                                        certificates if you should need the
                                        same. For more details, contact our
                                        WhatsApp helpline +91 9830933434
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
            <section id="home-icons" className="py-5 bg-alabaster">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-envelope fa-3x mb-2"></i>
                            <h3>Email</h3>
                            <p>theopusfoundation@gmail.com</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-address-book fa-3x mb-2"></i>
                            <h3>Address</h3>
                            <p>4a, Elgin Road Kolkata 700020</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-phone fa-3x mb-2"></i>
                            <h3>Phone</h3>
                            <p>+91 9830933434</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="main-footer" className="py-5 bg-d-gray text-white">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                            <a href="opus.html" className="navbar-brand">
                                <img
                                    src={require("./../assets/img/opus.png")}
                                    width="100"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5">
                            <ul className="nav navbar">
                                <li className="nav-items active">
                                    <a
                                        href="opus.html"
                                        className="nav-link text-light font-weight-bold font-monte"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-items">
                                    <a
                                        href="media_center.html"
                                        className="nav-link text-light font-weight-bold font-monte"
                                    >
                                        Media Center
                                    </a>
                                </li>
                                <li className="nav-items">
                                    <a
                                        href="https://rzp.io/l/jvLArNx"
                                        target="_blank"
                                        className="nav-link text-light font-weight-bold font-monte"
                                        rel="noopener noreferrer"
                                    >
                                        Donate Now
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="col-sm-12 col-xs-12 col-md-3 col-lg-3"
                            style={{ marginTop: "8px" }}
                            // style="margin-top:8px;"
                        >
                            <a
                                href="https://www.facebook.com/wecareprojectofopusfoundation"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("./../assets/img/fbicon.png")}
                                    alt=""
                                />
                            </a>
                            <a href="#" target="_blank">
                                <img
                                    src={require("./../assets/img/whatsapp.png")}
                                    alt=""
                                />
                            </a>
                            <a href="#" target="_blank">
                                <img
                                    src={require("./../assets/img/twitter.png")}
                                    alt=""
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/opusfoundationtrust"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("./../assets/img/instagram.png")}
                                    alt=""
                                />
                            </a>
                        </div>

                        {/* <div className="col-md-6 ml-auto">
          <p className="lead">
            Copyright &copy;
            <span id="year"></span>
          </p>
        </div> */}
                    </div>
                </div>
            </footer>

            {/* VIDEO MODAL SECTION */}
            <div className="modal fade" id="videoModal">
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
            </div>
        </body>
    );
};

export default Opus;
