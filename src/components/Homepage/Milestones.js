import React from "react";
import axios from "axios";

class Milestones extends React.Component { 
    state = {
        milestones: [],
        active: 0,
      };

      componentDidMount() {
        axios
          .get("http://35.184.242.240:1337/milestone-list")
          .then(({ data }) => {
            const root = "http://35.184.242.240:1337";
            const milestones = data.milestone_items.map((milestone) => {
             
              return {
                publish_date : milestone.publish_date,
                headline : milestone.headline,
                initiative : milestone.initiative,
                details : milestone.details,
                knowmorelink : milestone.knowmorelink,
                imgSrc : root + milestone.dpimage.formats.small.url,
                pdflink : root + milestone.report.url,
              };
            });
            const { Name } = data;
            this.setState({ milestones, Name });
          })
          .catch(console.error);
      }  

     

      render() {
          return(
            <section id="story" className="bg-alabaster">
                <div className="container pb-3 pt-5">
                <h3 class="text-primary text-center">{this.state.Name}</h3>
                {this.state.milestones.map((milestone) => (
                    <div className="row pt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                      <img src={milestone.imgSrc} className="img-fluid " alt="" />
                    </div>
                    <div className="col-lg-6  col-md-6 col-12 mb-5">
                        <h5>{milestone.publish_date}</h5>
                        <h5>{milestone.initiative}</h5>
                      <h4 className="">{milestone.headline}</h4>
                      <p>{milestone.details}</p>
                      {milestone.knowmorelink ? (
                        <a
                          href={milestone.knowmorelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn bg-primary text-white"
                        >
                          Know more
                        </a>
                      ) : null}{" "}

                       { milestone.pdflink ? (
                        <a
                          href={milestone.pdflink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn bg-primary text-white"
                        >
                          Report
                        </a>
                      ) : null}{" "}
                      
                    </div>
                  </div>
                ))}
                </div>
            </section>
          );
      }
}


export default Milestones;