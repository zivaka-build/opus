import React from "react";
import axios from "axios";

class Footer extends React.Component {
  state = {
    fb_link: "",
    instagram_link: "",
    whatsapp: "",
    twitter_link: "",
    logo: "",
    imgUrl: "http://35.184.242.240:1337",
    imgSrc: "",
  };

  componentDidMount() {
    axios
      .get("http://35.184.242.240:1337/footer")
      .then(({ data }) => {
        const { fb_link, instagram_link, whatsapp, twitter_link, logo } = data;
        const imgSrc = logo.formats.small.url;
        this.setState({
          fb_link,
          instagram_link,
          whatsapp,
          twitter_link,
          logo,
          imgSrc,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <footer id="main-footer" className="py-5 bg-d-gray text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
              <a href="opus.html" className="navbar-brand">
                <img
                  src={this.state.imgUrl + this.state.imgSrc}
                  width="200"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5">
              <ul className="nav navbar">
                <li className="nav-items active">
                  <a
                    href="/about"
                    className="nav-link text-light font-weight-bold font-monte"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-items">
                  <a
                    href="/mediacenter"
                    className="nav-link text-light font-weight-bold font-monte"
                  >
                    Media Center
                  </a>
                </li>
                <li className="nav-items">
                  <a
                    href="https://rzp.io/l/jvLArNx"
                    target="_blank"
                    className="nav-link text-light font-weight-bold font-monte"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-sm-12 col-xs-12 col-md-3 col-lg-3"
              style={{ marginTop: "8px" }}
              // style="margin-top:8px;"
            >
              <a
                href={this.state.fb_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./../../assets/img/fbicon.png")} alt="facebook icon" />
              </a>
              <a
                href={this.state.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./../../assets/img/whatsapp.png")} alt="whatsapp icon" />
              </a>
              <a
                href={this.state.twitter_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./../../assets/img/twitter.png")} alt="twitter icon" />
              </a>
              <a
                href={this.state.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("./../../assets/img/instagram.png")} alt="instragram icon" />
              </a>
            </div>

            {/* <div className="col-md-6 ml-auto">
                            <p className="lead">
                                Copyright &copy;
                                <span id="year"></span>
                            </p>
                            </div> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
