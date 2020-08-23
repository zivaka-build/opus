import React from "react";
import axios from "axios";

class CurrentProjects extends React.Component { 
    state = {
        currentprojects: [],
        active: 0,
      };

      componentDidMount() {
        axios
          .get("http://35.184.242.240:1337/current-project-list/")
          .then(({ data }) => {
            const root = "http://35.184.242.240:1337";
            const currentprojects = data.current_project_items.map((currentproject) => {
             
              return {
                publish_date : currentproject.publish_date,
                headline : currentproject.headline,
                initiative : currentproject.initiative,
                details : currentproject.details,
                knowmorelink : currentproject.knowmorelink,
                imgSrc : root + currentproject.dpimage.formats.small.url,
                
              };
            });
            const { name } = data;
            this.setState({ currentprojects, name });
          })
          .catch(console.error);
      }  

     

      render() {
          return(
            <section id="currentprojects" className="bg-alabaster richard">
                <div className="container pb-3 pt-5">
                <h3 class="text-primary text-center">{this.state.name}</h3>
                {this.state.currentprojects.map((currentproject) => (
                    <div className="row pt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                      <img src={currentproject.imgSrc} className="img-fluid " alt="" />
                    </div>
                    <div className="col-lg-6  col-md-6 col-12 mb-5">
                        <h5>{currentproject.publish_date}</h5>
                        <h5>{currentproject.initiative}</h5>
                      <h4 className="">{currentproject.headline}</h4>
                      <p>{currentproject.details}</p>
                      {currentproject.knowmorelink ? (
                        <a
                          href={currentproject.knowmorelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn bg-primary text-white"
                        >
                          Know more
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

export default CurrentProjects;