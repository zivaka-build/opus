/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class BlogList extends React.Component {
    render() {
        return (
            <section className="blog-container">
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-5 col-xs 12 main-blog-content container">
                            <h3 className="blog-post-title">Recent Events</h3>
                            <hr />
                            <ul>
                                <li>
                                    <a href>
                                        Entitlement and Privilege June 2, 2020
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        Gender Stereotyping – A mother’s Angst
                                        May 31, 2020
                                    </a>
                                </li>
                                <li>
                                    <a href>Death May 29, 2020</a>
                                </li>
                                <li>
                                    <a href>
                                        A personal Reckoning – In the Sunderbans
                                        May 25, 2020
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        Entitlement and Privilege June 2, 2020
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-xs 12 main-blog-content container">
                            <h3 className="blog-post-title">Recent News</h3>
                            <hr />
                            <ul>
                                <li>
                                    <a href>
                                        Entitlement and Privilege June 2, 2020
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        Gender Stereotyping – A mother’s Angst
                                        May 31, 2020
                                    </a>
                                </li>
                                <li>
                                    <a href>Death May 29, 2020</a>
                                </li>
                                <li>
                                    <a href>
                                        A personal Reckoning – In the Sunderbans
                                        May 25, 2020
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        Entitlement and Privilege June 2, 2020
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogList;
