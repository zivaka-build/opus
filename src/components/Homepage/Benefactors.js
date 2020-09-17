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
    
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cause</th>
                        <th>Kind of Donation</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.benefactors.map((benefactor) => (
                    <tr>
		                 <td>{benefactor.Name}</td>
		                <td>{benefactor.Cause}</td>
		                <td>{benefactor.DetailsOfDonationInKind}</td>
	                </tr>
                    ))}
                </tbody>
            </table>
    

     
     
        </div>
    );
}

}

export default Benefactors;