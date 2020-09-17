/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Benefactors from "./Homepage/Benefactors"

const OurBenefactors = () => {
    return(
        <Fragment>
            <Nav />
            <Benefactors />
            <Contact />
            <Footer />
        </Fragment>

    );
};

export default OurBenefactors;