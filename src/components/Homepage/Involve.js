/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";

class Involve extends React.Component {
  state = {
    donate: "",
    donate_link: "",
    volunteer: "",
    volunteer_email: "",
  };

  componentDidMount() {
    axios
      .get("http://35.184.242.240:1337/getinvolved")
      .then(({ data }) => {
        const { donate, volunteer, donate_link, volunteer_email } = data;
        this.setState({
          donate,
          donate_link,
          volunteer,
          volunteer_email,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <section id="faq" className="pt-5 bg-alabaster txt-r-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5 faq-left">
              <div className="card">
                <div className="card-body">
                  <a
                    href={this.state.donate_link}
                    target="_blank"
                    className="buttons mb-3"
                    rel="noopener noreferrer"
                  >
                    Support Us
                  </a>
                  <p className="text-justify">{this.state.donate}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
              <div className="card">
                <div className="card-body">
                  <a
                    href="/contact"
                    className="buttons mb-3"
                  >
                    Volunteer
                  </a>
                  <p className="text-justify">{this.state.volunteer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Involve;
