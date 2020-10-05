import React, { Fragment } from "react";
import axios from "axios";


class TeamCard extends React.Component {
  state = {
    teams: []
  };

  componentDidMount() {
    const root = "http://35.184.242.240:1337";

    axios
      .get("http://35.184.242.240:1337/team-members")
      .then(({ data }) => { 
        console.log(data);

        const teams = data.map((team) => {
          const { id, name, role, short_bio} = team;
          const imgSrc = root + team.picture.url;

          return {
            id,
            name,
            role,
            short_bio,
            imgSrc,
          };
        });
        this.setState({ teams });
      });
  }

    render(){
    return(
        <div id="teams" className="teamcardcontainer row container-fluid text-center pt-2">
        <div className="col-12 mt-3 text-center"><h3>Think Tank</h3></div>
        {this.state.teams.map((team) => (
         
        <div className="teamcard col-sm-12 col-md-5 col-lg-5 container mt-3 mb-3">
        <div className="row">
        <div className="col-12 mt-2 mb-auto text-center">
        <img src={team.imgSrc} alt="Avatar" style={{width: '40%'}} /></div>
        <div className="container col-12">
          <h4>{ team.name }</h4>
           <h6>{ team.role }</h6>
            <p className="text-justify">{ team.short_bio }</p>
          </div>
          </div>
        </div>
        ))}


      
      </div>

    );}
}

export default TeamCard;