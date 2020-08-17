import React, { Fragment } from "react";
import axios from "axios";


class TeamCard extends React.Component {
  state = {
    teams: []
  };

  componentDidMount() {
    const root = "http://35.184.242.240:1337";

    axios
      .get("http://35.184.242.240:1337/teams/" + this.props.teamId)
      .then(({ data }) => { 
        console.log(data);

        const teams = data.team_members.map((team) => {
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
        <div className="teamcardcontainer row container-fluid text-center">
        <div className="col-12 mt-3 text-center"><h3>Our Team Members</h3></div>
        {this.state.teams.map((team) => (
        <div className="teamcard col-sm-12 col-md-6 col-lg-7 container mt-3 mb-3">
        <div className="row">
        <div className="col-12 mt-2 mb-auto text-center">
        <img src={team.imgSrc} alt="Avatar" style={{width: '40%'}} /></div>
        <div className="container col-12">
          <h3>{ team.name }</h3>
           <p>{ team.role }</p>
            <p>{ team.short_bio }</p>
          </div>
          </div>
        </div>
        ))}
      
      </div>

    );}
}

export default TeamCard;