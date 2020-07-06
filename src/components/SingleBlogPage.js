/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import Nav from "./Homepage/Nav";
import SingleBlog from "./Homepage/SingleBlog";
import Footer from "./Homepage/Footer";

const SingleBlogPage = () => {
  return (
    <Fragment>
      {/* NavBar */}
      <Nav />

      {/* SingleBlog */}
      <SingleBlog />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default SingleBlogPage;
