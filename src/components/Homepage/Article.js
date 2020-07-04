/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

class Article extends React.Component {
    componentDidMount() {
        const el = document.getElementsByClassName("video")[0];
        const videoSRC = el.getAttribute("data-video"),
            videoSRCauto = videoSRC;

        const iframe = document.getElementsByTagName("iframe")[0];
        console.log(iframe);

        iframe.setAttribute("src", videoSRCauto);
    }

    openVideo(e) {
        e.preventDefault();

        const el = e.target.parentElement;
        console.log(el.getAttribute("data-target"));
        const theModal = el.getAttribute("data-target"),
            videoSRC = el.getAttribute("data-video"),
            videoSRCauto = videoSRC;

        console.log(theModal, videoSRC, videoSRCauto);
        const iframe = document.getElementsByTagName("iframe")[0];
        console.log(iframe);

        iframe.setAttribute("src", videoSRCauto);
    }

    render() {
        return (
            <Fragment>
                <section id="article" className="pt-5 bg-alabaster">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <div className="card card-inverse">
                                    <div className="hover ehover2">
                                        <img
                                            className="card-img rounded-0"
                                            src={require("./../../assets/img/gallery/9.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <a
                                                href=""
                                                className="video"
                                                data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                                data-toggle="modal"
                                                data-target="#videoModal"
                                                onClick={this.openVideo}
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
                                            src={require("./../../assets/img/gallery/10.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <h4 className="card-title">
                                                Card title
                                            </h4>
                                            <p className="card-text text-white">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
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
                                            src={require("./../../assets/img/gallery/11.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <a
                                                href="#"
                                                className="video"
                                                data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                                data-toggle="modal"
                                                data-target="#videoModal"
                                                onClick={this.openVideo}
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
                                            src={require("./../../assets/img/gallery/12.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <h4 className="card-title">
                                                Card title
                                            </h4>
                                            <p className="card-text text-white">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
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
                                            src={require("./../../assets/img/gallery/13.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <h4 className="card-title">
                                                Card title
                                            </h4>
                                            <p className="card-text text-white">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
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
                                            src={require("./../../assets/img/gallery/14.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <a
                                                href="#"
                                                className="video"
                                                data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                                data-toggle="modal"
                                                data-target="#videoModal"
                                                onClick={this.openVideo}
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
                                            src={require("./../../assets/img/gallery/15.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <h4 className="card-title">
                                                Card title
                                            </h4>
                                            <p className="card-text text-white">
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
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
                                            src={require("./../../assets/img/gallery/16.png")}
                                            alt=""
                                        />
                                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                                            <a
                                                href=""
                                                className="video"
                                                data-video="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwecareprojectofopusfoundation%2Fvideos%2F262791018132518%2F&amp;show_text=0&amp;width=560"
                                                data-toggle="modal"
                                                data-target="#videoModal"
                                                onClick={this.openVideo}
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
                                    src=""
                                    width="100%"
                                    height="308"
                                    style={{
                                        border: "none",
                                        overflow: "hidden",
                                    }}
                                    // style="border:none;overflow:hidden"
                                    scrolling="no"
                                    frameBorder="0"
                                    allowTransparency="true"
                                    allowFullScreen="true"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Article;
