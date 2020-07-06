/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import RecentPosts from "./RecentPosts";

class SingleBlog extends React.Component {
    state = {
        Title: "",
        BlogIntro: "",
        postDate: "",
        tag: "",
        author: {},
        blogbody: "",
        preview: "",
        fullBlog: false,
        imgSrc: "",
        showButton: true,
    };

    componentDidMount() {
        const blogId = window.location.pathname.split("/")[2];
        axios
            .get("http://35.184.242.240:1337/blogs/" + blogId)
            .then(({ data }) => {
                const root = "http://35.184.242.240:1337";
                const {
                    Title,
                    BlogIntro,
                    postdate: postDate,
                    tag,
                    author,
                    blogbody,
                } = data;

                const preview = blogbody.substring(0, 200);
                const imgSrc = data.dpimg ? root + data.dpimg : "";
                this.setState({
                    Title,
                    BlogIntro,
                    postDate,
                    tag,
                    author,
                    blogbody,
                    preview,
                    imgSrc,
                });
            })
            .catch(console.error);
    }

    render() {
        return (
            <section className="blog-container">
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-7 col-xs 12 main-blog-content container">
                            <article>
                                <header>
                                    <h2 className="blog-post-title">
                                        {this.state.Title}
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
                        <RecentPosts />
                    </div>
                </div>
            </section>
        );
    }
}

export default SingleBlog;
