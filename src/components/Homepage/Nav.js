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
            <ul className="navbar-nav ml-auto">
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

                  <a className="dropdown-item" href="/about">
                    Our Story
                  </a>
                  <a className="dropdown-item" href="/vision">
                    Vision Mission
                  </a>
                  <a className="dropdown-item" href="/media">
                    Media Center
                  </a>
                  <a className="dropdown-item" href="/testimonials">
                    Testimonials
                  </a>

                  <a className="dropdown-item" href="/thinktank">
                    Thinktank
                  </a>
                  
                  
                </div>
              </li>
              {/*<li className="nav-item">
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
    </li>*/}     {/*<li className="nav-item">
                <a className="nav-link" id="nav-intiative" href="/initiative">
                  Initiatives
                </a>
    </li> */}

<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/initiative"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Initiatives
                </a>
                <div
                  className="dropdown-menu bg-alabaster"
                  aria-labelledby="navbarDropdownMenuLink2"
                >

                  <a className="dropdown-item" href="/roshni">
                    Roshni
                  </a>
                  <a className="dropdown-item" href="/metr">
                    Metr
                  </a>
                  <a className="dropdown-item" href="/aashakiran">
                    AashaKiran
                  </a>
                  <a className="dropdown-item" href="/pragati">
                    Pragati
                  </a>
                </div>
              </li>
                
               <li className="nav-item">
                <a className="nav-link" id="nav-ms" href="/ms">
                  Milestones
                </a>
                </li>

                <li className="nav-item">
                <a className="nav-link" id="nav-cp" href="/cp">
                  Current Projects
                </a>
               </li>
              

               <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/contact"
                  id="navbarDropdownMenuLink3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Support Us
                </a>
                <div
                  className="dropdown-menu bg-alabaster"
                  aria-labelledby="navbarDropdownMenuLink3"
                >

                  <a className="dropdown-item" href="https://rzp.io/l/lw35wig"  target="_blank" rel="noopener noreferrer">
                    Donate Now
                  </a>
                  <a className="dropdown-item" href="/contact">
                    Volunteer
                  </a>
                  <a className="dropdown-item" href="/ourbenefactors">
                    Our Benefactors
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}



export default Nav;
