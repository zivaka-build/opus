/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link } from "@reach/router";
import axios from "axios";

class Article extends React.Component {
  state = {
    articles: [],
    showModal: false,
  };

  componentDidMount() {
    const root = "http://35.184.242.240:1337";

    axios
      .get("http://35.184.242.240:1337/articlesections/" + this.props.articleId)
      .then(({ data }) => {
        console.log(this.props.articleId);
        console.log(data);
        
        const articles = data.articletiles.map((article) => {
          const { id, tilename, introtxt, videolink, type, blogid } = article;
          const imgSrc = root + article.dpimg.formats.thumbnail.url;
          const iframe = document.getElementsByTagName("iframe")[0];
          // console.log(iframe);

          iframe.setAttribute("src", videolink);
          return {
            id,
            tilename,
            introtxt,
            videolink,
            imgSrc,
            type,
            blogid,
          };
        });
        this.setState({ articles });
      });
  }

  // openVideo(e) {
  //     e.preventDefault();

  //     const el = e.target.parentElement;
  //     // console.log(el.getAttribute("data-target"));
  //     const videoSRC = el.getAttribute("data-video"),
  //         videoSRCauto = videoSRC;

  //     // console.log(theModal, videoSRC, videoSRCauto);
  //     const iframe = document.getElementsByTagName("iframe")[0];
  //     console.log(iframe);

  //     iframe.setAttribute("src", videoSRCauto);
  // }

  openVideo(link) {
    this.setState({ showModal: true });
    const iframe = document.getElementsByTagName("iframe")[0];
    console.log(iframe);
    iframe.setAttribute("src", link);
  }

  render() {
    return (
      <Fragment>
        <section id="article" className="pt-5 bg-alabaster">
          <div className="container">
            <div className="row no-gutters">
              {this.state.articles.map((article) =>
                article.type === "video" ? (
                  <div
                    className="col-md-3"
                    key={article.imgSRc + article.tilename}
                  >
                    <div className="card card-inverse">
                      <div className="hover ehover2">
                        <img
                          className="card-img rounded-0"
                          src={article.imgSrc}
                          alt=""
                        />
                        <div className="card-img-overlay overlay content-details fadeIn-bottom">
                          <h4 className="card-title">{article.tilename}</h4>
                          <a
                            href=""
                            className="video"
                            rel="noopener noreferrer"
                            data-video={article.videolink}
                            data-toggle="modal"
                            data-target="#videoModal"
                            onClick={(e) => {
                              e.preventDefault();
                              this.openVideo(article.videolink);
                            }}
                          >
                            <i className="fas fa-play fa-3x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-3" key={article.imgSrc}>
                    <div
                      className="card card-inverse"
                      style={{ cursor: "pointer" }}
                    >
                      <Link to={"/blog/" + article.id}>
                        <div className="hover ehover12">
                          <img
                            className="card-img rounded-0"
                            src={article.imgSrc}
                            alt=""
                          />
                          <div className="card-img-overlay overlay content-details fadeIn-bottom">
                            <h4 className="card-title">{article.tilename}</h4>
                            <p className="card-text text-white">
                              {article.introtxt}
                            </p>
                            {/* <p className="card-text text-white">
                                                        <small>
                                                            Last updated 5 mins
                                                            ago
                                                        </small>
                                                    </p> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* VIDEO MODAL SECTION */}
        <div className="modal fade" id="videoModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <iframe
                  title="iframe#1"
                  src=""
                  width="100%"
                  height="308"
                  style={{
                    border: "none",
                    overflow: "hidden",
                  }}
                  // style="border:none;overflow:hidden"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency="true"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Article;
