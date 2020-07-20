import React from "react";
import axios from "axios";

class Quotes extends React.Component {
  state = {
    quotes: [],
    quote: {},
  };

  componentDidMount() {
    axios
      .get("http://35.184.242.240:1337/quotes/" + this.props.quoteId)
      .then(({ data }) => {
        // console.log(data);
        this.setState({ quote: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const quote = this.state.quote || "";

    return (
      <section id="quote" className="py-4 text-center bg-d-gray text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="info-header">
                <p className="lead font-monte font-size-16">{quote.line2}</p>
                <h5 className="font-lato">{quote.name}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quotes;
