/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "@reach/router";

class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top bg-alabaster"
        id="main-nav"
      >
        <div className="container">
          <a href="opus.html" className="navbar-brand">
            <img
              src={require("./../../assets/img/opus.png")}
              width="100"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="opus.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Verticals
                </a>
                <div
                  className="dropdown-menu bg-alabaster"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    to="/roshni"
                    className="dropdown-item"
                    href="roshni.html"
                  >
                    Roshni
                  </Link>
                  <a className="dropdown-item" href="metR.html">
                    MetR
                  </a>
                  <a className="dropdown-item" href="ashakiran.html">
                    AshaKiran
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <div
                  className="dropdown-menu bg-alabaster"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="our_story.html">
                    Our Story
                  </a>
                  <a className="dropdown-item" href="our_team.html">
                    Our Team
                  </a>
                  <a className="dropdown-item" href="legal_financial.html">
                    Legal & Financial
                  </a>
                  <a className="dropdown-item" href="contact_us.html">
                    Contact Us
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="media_center.html">
                  Media Center
                </a>
              </li>
            </ul>
            <a
              href="https://rzp.io/l/jvLArNx"
              target="_blank"
              className="btn py-0"
              style={{ cursor: "pointer" }}
              // style="cursor: pointer;"
              rel="noopener noreferrer"
            >
              <img
                src={require("./../../assets/img/donate_now.png")}
                width="160"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
