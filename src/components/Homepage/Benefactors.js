import React from "react";
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



class Benefactors extends React.Component {
    state = {
        benefactors: [],
        cashbenefactors: [],
        pledgebenefactors: []
        
      };

      componentDidMount() {
        const root = "http://35.184.242.240:1337";
        axios.all([axios.get("http://35.184.242.240:1337/benefactors?_sort=cause:ASC"), 
        axios.get("http://35.184.242.240:1337/benefactors-cashes"),
        axios.get("http://35.184.242.240:1337/benefactor-pledges")])
        .then((responseArr) => {
        const benefactors = responseArr[0].data.map((benefactor) => {
            const { Name, Cause, DetailsOfDonationInKind } = benefactor;
            return {
               Name,
               Cause,
               DetailsOfDonationInKind,
              };
        });

        const cashbenefactors = responseArr[1].data.map((cashbenefactor) =>{
            const { Name, Cause, amount }  = cashbenefactor;
            return {
                Name,
                Cause,
                amount
            };
        });

        const pledgebenefactors = responseArr[2].data.map((pledgebenefactor) =>{
            const { name, cause, pledge, donated }  = pledgebenefactor;
            return {
                name,
                cause,
                pledge,
                donated
            };
        });

        this.setState({ benefactors, cashbenefactors, pledgebenefactors });
    })
    .catch(console.error);
}

render() {
    return(
        <div className="benefactors pt-5 pb-5">
        <center>
        
        <h3>Our Benefactors</h3>
        
        <br />

        <div>
            <button className="btn btn-secondary" onClick={ () => {
                  var kinddonation= document.querySelector("#kinddonation");
                  kinddonation.style.display= "block";
        
                  var cashdonation= document.querySelector("#cashdonation");
                  cashdonation.style.display= "none";

                  var pledge= document.querySelector("#pledge");
                  pledge.style.display= "none";
        
            }}>Kind Donation</button> &nbsp;
            <button className="btn btn-secondary" onClick={()=> {
                var kinddonation= document.querySelector("#kinddonation");
                kinddonation.style.display= "none";
      
                var cashdonation= document.querySelector("#cashdonation");
                cashdonation.style.display= "block";

                var pledge= document.querySelector("#pledge");
                pledge.style.display= "none";
            }}>Cash Donation</button> &nbsp;
            <button className="btn btn-secondary" onClick={()=> {
                var kinddonation= document.querySelector("#kinddonation");
                kinddonation.style.display= "none";
      
                var cashdonation= document.querySelector("#cashdonation");
                cashdonation.style.display= "none";

                var pledge= document.querySelector("#pledge");
                pledge.style.display= "block";
            }}>Pledge For Cause</button>
        </div>
        <br />
        
        <div className="kinddonation col-lg-8 col-md-8 col-12" id="kinddonation" style={{display: 'block'}}>
        
        <h5>Kind Donation</h5>
        <br />
        
        <BootstrapTable bootstrap4 keyField='id' data={ this.state.benefactors } columns={ [{ dataField: 'Name', text: 'Name', sort: true},
        { dataField: 'Cause', text: 'Cause',sort: true},
        { dataField: 'DetailsOfDonationInKind', text: 'Kind Of Donation'}
        ] } />
        </div>

        <div className="cashdonation col-lg-8 col-md-8 col-12" id="cashdonation" style={{display: 'none'}}>
        
        <h5>Cash Donation</h5>
        <br />
        
        <BootstrapTable bootstrap4 keyField='id' data={ this.state.cashbenefactors } columns={ [{ dataField: 'Name', text: 'Name', sort: true},
        { dataField: 'Cause', text: 'Cause',sort: true},
        { dataField: 'amount', text: 'Amount'}
        ] } />
        </div>

        <div className="pledge col-lg-8 col-md-8 col-12" id="pledge" style={{display: 'none'}}>
        
        <h5>Pledge For Cause</h5>
        <br />
        
        <BootstrapTable bootstrap4 keyField='id' data={ this.state.pledgebenefactors } columns={ [{ dataField: 'name', text: 'Name', sort: true},
        { dataField: 'cause', text: 'Cause',sort: true},
        { dataField: 'pledge', text: 'Pledge'},
        { dataField: 'donated', text: 'Donated'},
        ] } />
        </div>
        </center>
    

     
     
        </div>
    );
}

}

export default Benefactors;