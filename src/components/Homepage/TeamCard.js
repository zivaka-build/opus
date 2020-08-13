import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const TeamCard = () => {
    return(
        <div className="teamcardcontainer row container-fluid">
        <div className="teamcard col-sm-12 col-md-6 col-lg-5 container">
        <div className="row">
        <div className="col-6 mt-auto mb-auto text-center">
        <img src={require("./../../assets/img/Card.png")} alt="Avatar" style={{width: '40%'}} /></div>
        <div className="container col-5">
          <h4><b>Name</b></h4>
          <p>Designation</p>
          <p>Description of the Team Member.</p>
          </div>
          </div>
          
      </div>
      <div className="teamcard col-sm-12 col-md-6 col-lg-5 container">
        <div className="row">
        <div className="col-6 mt-auto mb-auto text-center">
        <img src={require("./../../assets/img/Card.png")} alt="Avatar" style={{width: '40%'}} /></div>
        <div className="container col-5">
          <h4><b>Name</b></h4>
          <p>Designation</p>
          <p>Description of the Team Member.</p>
          </div>
          </div>
          
      </div>
      
      </div>

    );
}

export default TeamCard;