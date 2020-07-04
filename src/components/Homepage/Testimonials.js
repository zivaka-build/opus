import React from "react";
import axios from "axios";

class Testimonials extends React.Component {
    state = {
        name1: "",
        desc1: "",
        name2: "",
        desc2: "",
        message1: "",
        message2: "",
        dp1: "",
        dp2: "",
    };

    componentDidMount() {
        axios.get("http://35.184.242.240:1337/testimonials").then((res) => {
            const data = res.data[0];
            const { name1, name2, desc1, desc2, message1, message2 } = data;
            const root = "http://35.184.242.240:1337";
            const dp1 = root + data.dp1.formats.thumbnail.url;
            const dp2 = root + data.dp2.formats.thumbnail.url;
            this.setState({
                name1,
                name2,
                desc1,
                desc2,
                message1,
                message2,
                dp1,
                dp2,
            });
        });
    }

    render() {
        return (
            <section
                id="testimonials"
                className="py-5 text-center bg-white text-black"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 test-left">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel-left">
                                <img
                                    src={this.state.dp1}
                                    alt=""
                                    className="img-fluid rounded-circle mb-2"
                                />
                                <h4>{this.state.name1}</h4>
                                <small>{this.state.desc1}</small>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-5 panel-right">
                                <p>{this.state.message1}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 test-right">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-5 panel-left">
                                <p>{this.state.message2}</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel-right">
                                <img
                                    src={this.state.dp2}
                                    alt=""
                                    className="img-fluid rounded-circle mb-2"
                                />
                                <h4>{this.state.name2}</h4>
                                <small>{this.state.desc2}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
