import React from "react";
import axios from "axios";

class Testimonial extends React.Component {
    state = {
        testimonials: [],
        active: 0,
    };

    componentDidMount() {
        axios
            .get("http://35.184.242.240:1337/testimonials")
            .then((res) => {
                const testimonials = [];
                const root = "http://35.184.242.240:1337";
                res.data.forEach((twinObj) => {
                    const { name1, desc1, message1 } = twinObj;
                    const dp1 = root + twinObj.dp1.formats.thumbnail.url;
                    testimonials.push({
                        name: name1,
                        desc: desc1,
                        mesasge: message1,
                        dp: dp1,
                    });
                    const { name2, desc2, message2 } = twinObj;
                    const dp2 = root + twinObj.dp2.formats.thumbnail.url;
                    testimonials.push({
                        name: name2,
                        desc: desc2,
                        mesasge: message2,
                        dp: dp2,
                    });
                });
                console.log(testimonials);

                this.setState({ testimonials });
            })
            .catch(console.error);
    }

    render() {
        return (
            <div>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    {/*Slides*/}
                    <div className="carousel-inner" role="listbox">
                        {/*First slide*/}
                        {this.state.testimonials.map((testimonial, index) => (
                            <div
                                className={
                                    this.state.active === index
                                        ? "carousel-item active"
                                        : "carousel-item"
                                }
                                key={testimonial.name}
                            >
                                <div className="testimonial">
                                    {/*Avatar*/}
                                    <div className="avatar mb-4">
                                        <p className="text-center">
                                            <img
                                                src={testimonial.dp}
                                                className="rounded-circle img-fluid avatar-image"
                                                alt={testimonial.name}
                                            />
                                        </p>
                                    </div>
                                    {/*Content*/}
                                    <div className="container">
                                        <p className="textimonial-text text-justify">
                                            <i className="fas fa-quote-left" />{" "}
                                            {testimonial.message}
                                            <i className="fas fa-quote-right" />
                                        </p>
                                    </div>
                                    <h4 className="font-weight-bold text-center">
                                        {testimonial.name}
                                    </h4>
                                    <h6 className="font-weight-bold my-3 text-center">
                                        {testimonial.desc}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Testimonial;
