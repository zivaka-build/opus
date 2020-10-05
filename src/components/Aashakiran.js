/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import TeamCard from "./Homepage/TeamCard"
import LogosPanel from "./Homepage/LogosPanel"
import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import ShowPanel from "./Homepage/ShowPanel";
import Navigation from "./Homepage/Navigation";
import CurrentProjects from "./Homepage/CurrentProjects";
import Involve from "./Homepage/Involve"
import Nav2 from "./Homepage/Nav2"

const Ashakiran = () => {
  return (
    <Fragment>
      {/* NavBar */}
      <Nav />
      {/* <LogosPanel /> */}
      
      {/*<Navigation />*/}
      <section id="showcase" className="pt-3 pb-3 text-center bg-light">
      
         
      <img id="banner" className="col-12 col-sm-12 col-md-12 col-lg-12" src={require("./../assets/img/AashaKiran-Banner-1.jpg")} />
   
      </section>

      {/* ABOUT SECTION */}
      <OurStory aboutId="3" />

      {/* MILESTONE */}
      {/*<ShowPanel id="2" title="Milestones" />*/}

      {/* QUOTE SECTION */}
      {/*<Quote quoteId="1" />*/}

      {/* ARTICLES */}
      
      <Article articleId="4" />
      

      {/* TEAM */}
      {/* <Team /> */}

      {/* CurrentProjects */}
      {/* <CurrentProjects /> */}

      {/* STORY */}
      {/* <Story /> */}

      {/*<CurrentProjects id="8" title="Current Initiative" />*/}

      {/* CONTACT US SECTION */}
      
      
      <Contact />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Ashakiran;
