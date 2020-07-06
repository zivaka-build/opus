import React from "react";
import axios from "axios";

class OurStory extends React.Component {
    state = {
        imgSrc: "",
        textblock1: "",
        textblock2: "",
        title: "",
        name: "",
    };

    componentDidMount() {
        axios
            .get(
                "http://35.184.242.240:1337/aboutsections/" + this.props.aboutId
            )
            .then(({ data }) => {
                const { title, textblock1, textblock2, name } = data;
                const imgSrc =
                    "http://35.184.242.240:1337" +
                    data.dpimage.formats.thumbnail.url;
                console.log(imgSrc);
                this.setState({ title, textblock1, textblock2, name, imgSrc });
            });
    }

    render() {
        return (
            <section id="ourstory" class="pt-3 bg-light text-black">
                <div class="container">
                    <hr />
                    <div class="row pt-3">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 panel-left text-center">
                            <img
                                src={this.state.imgSrc || ""}
                                alt=""
                                class="img-fluid rounded-circle mb-2"
                            />
                            <h5>{this.state.name}</h5>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 panel-right">
                            <h1 class="text-center">{this.state.title}</h1>
                            <p>{this.state.textblock1}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 panel-right">
                            <p>{this.state.textblock2}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurStory;
