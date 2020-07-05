import React from "react";
import axios from "axios";

class Gallery extends React.Component {
    state = {
        urls: [],
    };

    componentDidMount() {
        const root = "http://35.184.242.240:1337";
        axios
            .get("http://35.184.242.240:1337/galleries")
            .then((res) => {
                const data = res.data[0];
                const urls = data.picture.map(
                    (picObj) => root + picObj.formats.medium.url
                );
                this.setState({ urls });
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <section id="gallery" className="py-5 bg-alabaster">
                <div className="container">
                    <div className="row no-gutters">
                        {this.state.urls.map((url) => (
                            <div className="col-md-3" key={url}>
                                <div className="card card-inverse">
                                    <a href={url} data-toggle="lightbox">
                                        <img
                                            className="card-img rounded-0"
                                            src={url}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;
