import React, { Fragment } from "react";
import Nav from "./Homepage/Nav";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Testimonial from "./Homepage/Testimonial"
import Involve from "./Homepage/Involve"

const TestimonialPage = () => { 
    return(
        <Fragment>
            <Nav />
            <Testimonial />
           
            <Contact />
            
            <Footer />
        </Fragment>
    );
}

export default TestimonialPage;