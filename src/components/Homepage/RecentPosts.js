import React from "react";
import axios from "axios";

class RecentPosts extends React.Component {
    state = {
        recentPosts: [],
    };

    componentDidMount() {
        axios
            .get("http://35.184.242.240:1337/recentposts/1")
            .then(({ data }) => {
                const recentPosts = data.posts.map((post) => {
                    const { link, headline, created_at } = post;
                    const date = new Date(
                        Date.parse(created_at)
                    ).toDateString();
                    return { link, headline, date };
                });
                this.setState({ recentPosts });
            })
            .catch(console.error);
    }

    render() {
        return (
            <div className="col-lg-4 recent-posts">
                <div className="container">
                    <h3 className="blog-post-title">Recent Posts</h3>
                    <hr />
                    <ul>
                        {this.state.recentPosts.map((post) => (
                            <li key={post.created_at}>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {post.headline} <br />
                                    {post.date}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RecentPosts;
