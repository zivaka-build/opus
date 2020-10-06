import React, { Fragment } from "react";

import ShowPanel from "./Homepage/ShowPanel"
import Nav from "./Homepage/Nav"
import LogosPanel2 from "./Homepage/LogosPanel2"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Milestones from "./Homepage/Milestones"
import Involve from "./Homepage/Involve"

const ms = () => { 
    return(
        <Fragment>
            <Nav />
            <section id="showcase" className="pt-3 pb-3 text-center bg-light">
      
         
            <img id="banner" className="col-12 col-sm-12 col-md-12 col-lg-12" src={require("./../assets/img/Banner-2.0.jpg")} />
   
           </section>
            <Milestones />
            
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default ms;