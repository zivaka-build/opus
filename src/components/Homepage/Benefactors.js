import React from "react";
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



class Benefactors extends React.Component {
    state = {
        benefactors: [],
        
      };

      componentDidMount() {
        const root = "http://35.184.242.240:1337";
        axios
        .get("http://35.184.242.240:1337/benefactors?_sort=cause:ASC")
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
        
        <br />
        
        <div className="col-lg-8 col-md-8 col-12">
        <BootstrapTable bootstrap4 keyField='Cause' data={ this.state.benefactors } columns={ [{ dataField: 'Name', text: 'Name', sort: true},
        { dataField: 'Cause', text: 'Cause',sort: true},
        { dataField: 'DetailsOfDonationInKind', text: 'Kind Of Donation'}
        ] } />
        </div>
        </center>
    

     
     
        </div>
    );
}

}

export default Benefactors;