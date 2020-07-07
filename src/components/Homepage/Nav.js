/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top bg-alabaster"
        id="main-nav"
      >
        <div className="container">
          <a href="/" className="navbar-brand">
          
            <img src={require("./../../assets/img/opus.png")} width={100} alt="opus home icon" />
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
              <li className="nav-item">
                <a className="nav-link" href="/roshni">
                  Roshni
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/metr">
                  metR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aashakiran">
                  AashaKiran
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mediacenter">
                  Media Center
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="https://rzp.io/l/jvLArNx">
                  Donate Now
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
