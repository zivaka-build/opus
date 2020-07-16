import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import ContactForm from "./Contact/ContactForm";
import Footer from "./Homepage/Footer";

const Contact = () => {
  return (
    <Fragment>
      <Nav />
      {/* ContactForm */}
      <ContactForm />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Contact;
