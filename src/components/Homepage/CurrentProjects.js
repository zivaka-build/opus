import React from "react";
import axios from "axios";

class CurrentProjects extends React.Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        const root = "http://35.184.242.240:1337";
        axios.get("http://35.184.242.240:1337/milestones").then((res) => {
            const data = res.data[0];
            const articles = data.storypanelwides.map((article) => {
                return {
                    headline: article.headline,
                    description: article.description,
                    knowmore: article.knowmore,
                    donatelink: article.donatelink,
                    imgSrc: root + article.dpimg.formats.medium.url,
                };
            });
            this.setState({ articles });
        });
    }

    render() {
        return (
            <section id="story" className="bg-alabaster">
                <div className="container pb-2">
                    <h1 class="text-primary text-center">Current Projects</h1>
                    {this.state.articles.map((article, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div className="row pt-5">
                                    <div className="col-lg-6  col-md-6 col-12 mb-5">
                                        <h1 className=" text-capitalize">
                                            {article.headline}
                                        </h1>
                                        <p>{article.description}</p>
                                        {article.knowmore ? (
                                            <button className="btn bg-primary text-white">
                                                Know more
                                            </button>
                                        ) : null}{" "}
                                        {article.donatelink ? (
                                            <button className="btn bg-primary text-white ">
                                                Donate
                                            </button>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-6  col-md-6 col-12">
                                        <img
                                            src={article.imgSrc}
                                            className="img-fluid "
                                            alt=""
                                        />
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="row pt-5">
                                    <div className="col-lg-6  col-md-6 col-12">
                                        <img
                                            src={article.imgSrc}
                                            className="img-fluid "
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-lg-6  col-md-6 col-12 mb-5">
                                        <h1 className=" text-capitalize">
                                            {article.headline}
                                        </h1>
                                        <p>{article.description}</p>
                                        {article.knowmore ? (
                                            <button className="btn bg-primary text-white">
                                                Know more
                                            </button>
                                        ) : null}{" "}
                                        {article.donatelink ? (
                                            <button className="btn bg-primary text-white ">
                                                Donate
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        }
                    })}
                    <div className="row pt-5">
                        <div className="col-lg-6  col-md-6 col-12">
                            <img
                                src={require("./../../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6  col-md-6 col-12">
                            <h1 className="text-capitalize">Richard</h1>
                            <p>
                                {" "}
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly.
                            </p>
                            <button className="btn bg-primary text-white">
                                Know more
                            </button>{" "}
                            <button className="btn bg-primary text-white ">
                                Donate
                            </button>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-6  col-md-6 col-12 mb-5">
                            <h1 className=" text-capitalize"> Lorem Ipsum</h1>
                            <p>
                                {" "}
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly.
                            </p>
                            <button className="btn bg-primary text-white">
                                Know more
                            </button>{" "}
                            <button className="btn bg-primary text-white ">
                                Donate
                            </button>
                        </div>
                        <div className="col-lg-6  col-md-6 col-12">
                            <img
                                src={require("./../../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                                className="img-fluid "
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-6  col-md-6 col-12">
                            <img
                                src={require("./../../assets/img/POSCO_cover_watermark_1300x550_170227_1.jpg")}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6  col-md-6 col-12">
                            <h1 className=" text-capitalize"> Lorem Ipsum</h1>
                            <p>
                                {" "}
                                Mobile web traffic overtook desktop one in 2016
                                and will only grow in 2020, and that's why it's
                                important to create websites that look good on
                                all devices. No special actions required, all
                                sites you make with the Builder are
                                mobile-friendly.
                            </p>
                            <button className="btn bg-primary text-white">
                                Know more
                            </button>{" "}
                            <button className="btn bg-primary text-white ">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CurrentProjects;
