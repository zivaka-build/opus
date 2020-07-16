/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import axios from "axios";

import Nav from "./Homepage/Nav";
import Footer from "./Homepage/Footer";
import RecentPosts from "./Homepage/RecentPosts";
import { navigate } from "@reach/router";

class SingleBlogPage extends React.Component {
    state = {
        title: "",
        blogIntro: "",
        postDate: "",
        tag: "",
        author: {},
        blogbody: "",
        blogListId: "",
        preview: "",
        fullBlog: false,
        imgSrc: "",
        showButton: true,
        sendProps: false,
    };

    componentDidMount() {
        const blogId = window.location.pathname.split("/")[2];
        axios
            .get("http://35.184.242.240:1337/blogarticles/" + blogId)
            .then(({ data }) => {
                const root = "http://35.184.242.240:1337";
                const {
                    title,
                    blogintro: blogIntro,
                    postdate: postDate,
                    tag,
                    Author,
                    blogbody,
                } = data;
                const { id: blogListId } = data.bloglist;

                const preview = blogbody.substring(0, 200);
                const imgSrc = data.dpimg ? root + data.dpimg.url : "";
                this.setState({
                    title,
                    blogIntro,
                    postDate,
                    tag,
                    author: Author,
                    blogbody,
                    preview,
                    imgSrc,
                    blogListId,
                    sendProps: true,
                });
            })
            .catch(console.error);
    }

    changeBlog(id) {
        navigate("/blog/" + id);
        this.componentDidMount();
    }

    render() {
        return (
            <Fragment>
                {/* NavBar */}
                <Nav />

                {/* SingleBlog */}
                <section className="blog-container">
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-lg-7 col-xs 12 main-blog-content container">
                                <article>
                                    <header>
                                        <h2 className="blog-post-title">
                                            {this.state.title}
                                        </h2>
                                        <p className="blog-post-meta">
                                            <i className="far fa-clock" />{" "}
                                            {this.state.postDate} &nbsp;
                                            <i className="fas fa-user" />{" "}
                                            {this.state.author
                                                ? this.state.author.username
                                                : ""}{" "}
                                            &nbsp;
                                            <i className="far fa-folder-open" />{" "}
                                            Issues Ins and Out &nbsp;
                                            <i className="fas fa-tags" />{" "}
                                            {this.state.tag}
                                        </p>
                                    </header>
                                    {this.state.imgSrc ? (
                                        <figure>
                                            <img
                                                src={this.state.imgSrc}
                                                alt="single blog page"
                                            />
                                            {/* <figcaption>
                                            Caption for the image
                                        </figcaption> */}
                                        </figure>
                                    ) : null}

                                    <p>
                                        {this.state.fullBlog
                                            ? this.state.blogbody
                                            : this.state.preview + " ..."}
                                    </p>
                                    {this.state.showButton ? (
                                        <a
                                            href=""
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({
                                                    fullBlog: true,
                                                    showButton: false,
                                                });
                                            }}
                                        >
                                            Read More →
                                        </a>
                                    ) : null}
                                </article>
                            </div>
                            {this.state.sendProps ? (
                                <RecentPosts
                                    listId={this.state.blogListId.toString()}
                                    swithFunc={this.changeBlog.bind(this)}
                                />
                            ) : null}
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <Footer />
            </Fragment>
        );
    }
}

export default SingleBlogPage;
