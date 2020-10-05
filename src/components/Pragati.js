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
import Nav2 from "./Homepage/Nav2"
import Involve from "./Homepage/Involve"

const Pragati = () => {
  return (
    <Fragment>
      {/* NavBar */}
      <Nav />
      
      {/* <LogosPanel /> */}
      {/*<Navigation />*/}
      <section id="showcase" className="pt-3 pb-3 text-center bg-light">
      
         
      <img id="banner" className="col-12 col-sm-12 col-md-12 col-lg-12" src={require("./../assets/img/Pragati-Banner-1.jpg")} />
   
      </section>

      {/* ABOUT SECTION */}
      <OurStory aboutId="5" />

      {/* MILESTONE */}
      {/*<ShowPanel id="6" title="Milestones" />*/}

      {/* QUOTE SECTION */}
      {/*<Quote quoteId="5" />*/}
      
      {/* ARTICLES */}
      <Article articleId="6" />
      

      {/* STORY */}
      {/* <Story /> */}

      {/* TESTIMONIALS SECTION */}
      {/* <Testimonial /> */}

      {/*<CurrentProjects id="7" title="Current Initiative" />*/}
      
      {/* CONTACT US SECTION */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Pragati;
