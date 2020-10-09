import React, { Fragment } from "react";

import Donate from "./Homepage/Donate"
import CurrentProjects from "./Homepage/CurrentProjects"
import Nav from "./Homepage/Nav"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Involve from "./Homepage/Involve"


const cp = () => {
    return(
        <Fragment>
            <Nav />
            <section id="showcase" className="pt-3 pb-3 text-center bg-light">
      
         
            <img id="banner" className="col-12 col-sm-12 col-md-12 col-lg-12" src={require("./../assets/img/Current-Projects-Banner-3.jpg")} />
   
           </section>
            <CurrentProjects />
            
            <Contact />
            <Footer />
            
        </Fragment>
    );
}

export default cp;