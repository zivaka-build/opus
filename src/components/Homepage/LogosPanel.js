import React from "react";
import axios from "axios";

class LogosPanel extends React.Component {
    state = {
        logos: [],
    };

    componentDidMount() {
        axios
            .get("http://35.184.242.240:1337/initiative-panel/")
            .then(({ data }) => {
                console.log(data);
                const logos = [];
                const logo_names = ["roshnilogo", "metrlogo", "aashakiranlogo"];
                const root = "http://35.184.242.240:1337";
                for (const logo_name of logo_names) {
                    const logoObj = data[logo_name],
                        format = "small";
                    logos.push({
                        name: logo_name,
                        url: `${root}${logoObj.formats[format].url}`,
                        href: `${data[logo_name.slice(0, -4) + "link"]}`,
                    });
                }
                this.setState({ logos });
                console.log(this.state.logos);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <section id="boxes" className="pt-5 bg-alabaster">
                <div className="container">
                    <div className="row">
                        {this.state.logos.map((logoObj) => (
                            <div className="col-md-4">
                                <a
                                    href={logoObj.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="card text-center text-white mb-resp">
                                        <div className="card-body">
                                            <img
                                                src={logoObj.url}
                                                alt={logoObj.name}
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default LogosPanel;
