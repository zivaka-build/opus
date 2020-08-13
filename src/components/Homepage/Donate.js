import React from "react";
import axios from "axios";

class Donate extends React.Component {
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

  render(){
      return(
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5 faq-left">
        <div className="card">
          <div className="card-body">
            <a
              href={this.state.donate_link}
              target="_blank"
              className="btn bg-g-crayola mb-3"
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
      );
  }
}

export default Donate;