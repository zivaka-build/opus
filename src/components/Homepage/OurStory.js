import React from "react";
import axios from "axios";
const ReactMarkdown = require("react-markdown/with-html");

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

class OurStory extends React.Component {
  state = {
    base_url: "http://35.184.242.240:1337",
    imgSrc: "",
    textblock1: "",
    textblock2: "",
    title: "",
    name: "",
    details: "",
  };

  componentDidMount() {
    axios
      .get("http://35.184.242.240:1337/aboutsections/" + this.props.aboutId)
      .then(({ data }) => {
        const { title, textblock1, textblock2, name, details } = data;
        const imgSrc = "http://35.184.242.240:1337" + data.dpimage.url;
        /* console.log(imgSrc); */
        this.setState({ title, textblock1, textblock2, name, imgSrc, details });
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
              <h4>{this.state.name}</h4>
              <p>{this.state.details}</p>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 panel-right">
              <h3 class="text-center">{this.state.title}</h3>
              {/* <p>{this.state.textblock1}</p> */}

              {this.state.textblock1 == null ? null : (
                <ReactMarkdown
                  source={replaceAll(this.state.textblock1, "\n", "<br />")}
                  escapeHtml={false}
                  transformImageUri={(uri) =>
                    uri.startsWith("http")
                      ? uri
                      : `${this.state.base_url}${uri}`
                  }
                />
              )}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 panel-right">
              {/* <p>{this.state.textblock2}</p> */}
              {this.state.textblock2 == null ? null : (
                <ReactMarkdown
                  source={this.state.textblock2}
                  escapeHtml={false}
                  transformImageUri={(uri) =>
                    uri.startsWith("http")
                      ? uri
                      : `${this.state.base_url}${uri}`
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurStory;
