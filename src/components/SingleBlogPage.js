/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

import Nav from "./Homepage/Nav";
import Footer from "./Homepage/Footer";
import RecentPosts from "./Homepage/RecentPosts";

const ReactMarkdown = require("react-markdown/with-html");

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

class SingleBlogPage extends React.Component {
  state = {
    base_url: "http://35.184.242.240:1337",
    title: "",
    blogIntro: "",
    postDate: "",
    tag: "",
    author: {},
    blogbody: ``,
    blogListId: "",
    preview: "",
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
          tags: tag,
          Author,
          blogbody,
        } = data;
        const { id: blogListId } = data.bloglist;
        const imgSrc = data.dpimg ? root + data.dpimg.url : "";
        this.setState({
          title,
          blogIntro,
          postDate,
          tag,
          author: Author,
          blogbody,
          imgSrc,
          blogListId,
          sendProps: true,
        });
        const search = "\n";
        const replaceWith = "richard";
        this.state.blogbody.split(search).join(replaceWith);
        console.log(this.state.blogbody);

        /* console.log(replaceAll(this.state.blogbody, '\n', 'richard')); */
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
                    <h2 className="blog-post-title">{this.state.title}</h2>
                    <p className="blog-post-meta">
                      <i className="far fa-clock" /> {this.state.postDate}{" "}
                      &nbsp;
                      <i className="fas fa-user" />{" "}
                      {this.state.author ? this.state.author.username : ""}{" "}
                      &nbsp;
                      <i className="fas fa-tags" /> {this.state.tag}
                    </p>
                  </header>
                  {this.state.imgSrc ? (
                    <figure>
                      <img src={this.state.imgSrc} alt="single blog page" />
                      {/* <figcaption>
                                            Caption for the image
                                        </figcaption> */}
                    </figure>
                  ) : null}

                  {/* <p>{this.state.blogbody}</p> */}
                  <ReactMarkdown
                    source={replaceAll(this.state.blogbody, "\n", "<br />")}
                    escapeHtml={false}
                    transformImageUri={(uri) =>
                      uri.startsWith("http")
                        ? uri
                        : `${this.state.base_url}${uri}`
                    }
                  />
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
