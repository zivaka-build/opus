import React from "react";
import axios from "axios";

class RecentPosts extends React.Component {
    state = {
        blogs: [],
    };

    componentDidMount() {
        axios
            .get("http://35.184.242.240:1337/bloglists/" + this.props.listId)
            .then(({ data }) => {
                const blogs = data.blogarticles.map((blog) => {
                    const { id, title, postdate } = blog;
                    return { id, title, postdate };
                });
                this.setState({ blogs });
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
                        {this.state.blogs.map((blog) => (
                            <li key={blog.id}>
                                <a
                                    href={"/blog/" + blog.id.toString()}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.props.swithFunc(blog.id);
                                    }}
                                >
                                    {blog.title} <br />
                                    {blog.date}
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
