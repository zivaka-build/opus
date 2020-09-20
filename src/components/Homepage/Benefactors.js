import React from "react";
import axios from "axios";

import "./../../assets/css/table.css"


class Benefactors extends React.Component {
    state = {
        benefactors: [],
        
      };

      componentDidMount() {
        const root = "http://35.184.242.240:1337";
        axios
        .get("http://35.184.242.240:1337/benefactors")
        .then(({ data }) => {
        const benefactors = data.map((benefactor) => {
            const { Name, Cause, DetailsOfDonationInKind } = benefactor;
            return {
               Name,
               Cause,
               DetailsOfDonationInKind,
              };
        });

        this.setState({ benefactors });
    })
    .catch(console.error);
}

render() {
    return(
        <div className="benefactors pt-5 pb-5">
        <center>
        <h3>Our Benefactors</h3>
        </center>
        <br />
        <div class="container">
        <ul class="responsive-table">
        <li class="table-header">
      <div class="column column-1"><b>Name</b></div>
      <div class="column column-2"><b>Cause</b></div>
      <div class="column column-3"><b>Kind of Donation</b></div>
    </li>
    {this.state.benefactors.map((benefactor) => (
                    <li class="table-row">
                    <div class="column column-1" data-label="Name ">{benefactor.Name}</div>
                    <div class="column column-2" data-label="Cause ">{benefactor.Cause}</div>
                    <div class="column column-3" data-label="Kind Of Donation ">{benefactor.DetailsOfDonationInKind}</div>
                    
                  </li>
                    ))}
        </ul>
        </div>
            
    

     
     
        </div>
    );
}

}

export default Benefactors;