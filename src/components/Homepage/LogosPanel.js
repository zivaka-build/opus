/* eslint-disable jsx-a11y/anchor-is-valid */
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
        const logos = new Array(4);
        const logo_names = ["roshnilogo", "metrlogo", "aashakiranlogo", "pragatilogo"];
        const root = "http://35.184.242.240:1337";
        logo_names.forEach((logo_name, index) => {
          const logoObj = data[logo_name],
            format = "small";
          logos[index] = {
            name: logo_name,
            url: `${root}${logoObj.formats[format].url}`,
            href: `${logo_name.split("logo")[0]}`,
          };
        });
        this.setState({ logos });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <section id="boxes" className="pt-5 pb-5 bg-alabaster">
        <div className="container-fluid">
          <div className="row">
            {this.state.logos.map((logoObj) => (
              <div className="col-6 col-sm-6 col-md-3" key={logoObj.name}>
                <a
                  href={logoObj.href}
                  
                  rel="noopener noreferrer"
                >
                  <div className="card text-center text-white mb-resp">
                    <div className="card-body">
                      <img src={logoObj.url} alt={logoObj.name} width="100%" />
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
