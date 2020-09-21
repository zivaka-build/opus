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
      <Nav2 />
      {/*<Navigation />*/}

      {/* ABOUT SECTION */}
      <OurStory aboutId="3" />

      {/* MILESTONE */}
      {/*<ShowPanel id="2" title="Milestones" />*/}

      {/* QUOTE SECTION */}
      {/*<Quote quoteId="1" />*/}

      {/* ARTICLES */}
      <TeamCard teamId="3"/>
      <Article articleId="4" />
      

      {/* TEAM */}
      {/* <Team /> */}

      {/* CurrentProjects */}
      {/* <CurrentProjects /> */}

      {/* STORY */}
      {/* <Story /> */}

      {/*<CurrentProjects id="8" title="Current Initiative" />*/}

      {/* CONTACT US SECTION */}
      <Involve />
      <Contact />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Ashakiran;
