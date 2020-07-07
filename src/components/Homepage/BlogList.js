/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";

class BlogList extends React.Component {
    state = {
        events: [],
        posts: [],
    };

    componentDidMount() {
        axios
            .get("http://35.184.242.240:1337/recentevents/1")
            .then(({ data }) => {
                const events = data.events.map((event) => {
                    const { headline, link, created_at } = event;
                    const date = new Date(
                        Date.parse(created_at)
                    ).toDateString();
                    return { headline, link, date };
                });
                this.setState({ events });
            });
        axios
            .get("http://35.184.242.240:1337/recentposts/1")
            .then(({ data }) => {
                const posts = data.posts.map((post) => {
                    const { headline, link, created_at } = post;
                    const date = new Date(
                        Date.parse(created_at)
                    ).toDateString();
                    return { headline, link, date };
                });
                this.setState({ posts });
            });
    }

    render() {
        return (
            <section className="blog-container">
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-5 col-xs 12 main-blog-content container">
                            <h3 className="blog-post-title">Recent Events</h3>
                            <hr />
                            <ul>
                                {this.state.events.map((event) => (
                                    <li key={event.date}>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={event.link}
                                        >
                                            {event.headline} <br />
                                            {event.date}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-5 col-xs 12 main-blog-content container">
                            <h3 className="blog-post-title">Recent Posts</h3>
                            <hr />
                            <ul>
                                {this.state.posts.map((post) => (
                                    <li key={post.date}>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={post.link}
                                        >
                                            {post.headline} <br />
                                            {post.date}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogList;
