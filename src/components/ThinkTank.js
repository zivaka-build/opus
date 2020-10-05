import React, { Fragment } from "react";
import Nav from "./Homepage/Nav";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import TeamCard from "./Homepage/TeamCard"
import Involve from "./Homepage/Involve"

const ThinkTank = () => { 
    return(
        <Fragment>
            <Nav />
            <section id="showcase" className="pt-3 pb-3 text-center bg-light">
      
         
            <img id="banner" className="col-12 col-sm-12 col-md-12 col-lg-12" src={require("./../assets/img/Team-Banner-1.jpg")} />
   
           </section>
            <TeamCard />
           
            <Contact />
            
            <Footer />
        </Fragment>
    );
}

export default ThinkTank;