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
          
            <img src={require("./../../assets/img/opus.png")} width={100} alt />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="opus.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="media_center.html">
                  Roshni
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="media_center.html">
                  MetR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="media_center.html">
                  AshaKiran
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="media_center.html">
                  About Us
                </a>
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
            >
              <img src={require("./../../assets/img/donate_now.png")} width={160} alt />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
