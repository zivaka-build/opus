import React from "react";
import axios from "axios";

class CurrentProjects extends React.Component {
  state = {
    articles: [],
    headline: "",
    heading: "",
  };

  componentDidMount() {
    const root = "http://35.184.242.240:1337";
    axios
      .get("http://35.184.242.240:1337/milestones/" + this.props.id)
      .then(({ data }) => {
        const articles = data.storypanelwides.map((article) => {
          return {
            headline: article.heading,
            description: article.description,
            knowmore: article.knowmore,
            donatelink: article.donatelink,
            imgSrc: root + article.dpimg.formats.small.url,
          };
        });
        const { headline, heading } = data;
        this.setState({ articles, headline, heading });
      });
  }

  render() {
    return (
      <section id="currentprojects" className="bg-alabaster richard">
        <div className="container pb-2 pt-5">
          <h1 class="text-primary text-center">{this.state.heading}</h1>
          {this.state.articles.map((article, index) => {
            if (index % 2 === 0) {
              return (
                <div className="row pt-5">
                  <div className="col-lg-6  col-md-6 col-12 mb-5">
                    <h1 className="">{article.headline}</h1>
                    <p>{article.description}</p>
                    {article.knowmore ? (
                      <a
                        href={article.knowmore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-primary text-white"
                      >
                        Know more
                      </a>
                    ) : null}{" "}
                    {article.donatelink ? (
                      <a
                        href={article.donatelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-primary text-white "
                      >
                        Donate
                      </a>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <img src={article.imgSrc} className="img-fluid " alt="" />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="row pt-5">
                  <div className="col-lg-6 col-md-6 col-12">
                    <img src={article.imgSrc} className="img-fluid " alt="" />
                  </div>
                  <div className="col-lg-6  col-md-6 col-12 mb-5">
                    <h1 className="">{article.headline}</h1>
                    <p>{article.description}</p>
                    {article.knowmore ? (
                      <a
                        href={article.knowmore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-primary text-white"
                      >
                        Know more
                      </a>
                    ) : null}{" "}
                    {article.donatelink ? (
                      <a
                        href={article.donatelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-primary text-white "
                      >
                        Donate
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  }
}

export default CurrentProjects;
