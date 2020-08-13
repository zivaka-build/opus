/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import TeamCard from "./Homepage/TeamCard"
import Nav from "./Homepage/Nav";
import Navigation from "./Homepage/Navigation";
import Footer from "./Homepage/Footer";
import LogosPanel from "./Homepage/LogosPanel"
import Quote from "./Homepage/Quote";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import OurStory from "./Homepage/OurStory";
import ShowPanel from "./Homepage/ShowPanel";
import CurrentProjects from "./Homepage/CurrentProjects";

const Roshni = () => {
  return (
    <Fragment>
      {/* NavBar */}
      <Nav />
      <LogosPanel  />
      {/*<Navigation />*/}

      {/* ABOUT SECTION */}
      <OurStory aboutId="1" />

      {/* MILESTONE */}
      {/*<ShowPanel id="1" title="Milestones" />*/}

      {/* QUOTE SECTION */}
      {/*<Quote quoteId="3" />*/}

      {/* ARTICLES */}
      <Article articleId="2" />
      <TeamCard />

      {/* TEAM */}
      {/* <Team /> */}

      {/* CurrentProjects */}
      {/* <CurrentProjects /> */}

      {/* STORY */}
      {/* <Story /> */}

      {/*<CurrentProjects id="9" title="Current Initiative" />*/}
      {/* CONTACT US SECTION */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Roshni;
