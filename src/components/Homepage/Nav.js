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
            <img
              src={require("./../../assets/img/opus.png")}
              width={100}
              alt="opus home icon"
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/about"
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
                  <a className="dropdown-item" href="/media">
                    Media Center
                  </a>
                  <a className="dropdown-item" href="/about">
                    About Us
                  </a>
                  <a className="dropdown-item" href="/contact">
                    Contact Us
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/metr">
                  metR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/roshni">
                  Roshni
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/aashakiran">
                  AashaKiran
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pragati">
                  Pragati
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="https://rzp.io/l/lw35wig">
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
