/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div className="link__section">
        <ul>
          <li>
            <a href="#showcase">Focus</a>
          </li>
          <li>
            <a href="#story">Milestone</a>
          </li>
          {/* <li>
            <a href="#">Team</a>
          </li> */}
          <li>
            <a href="#article">Blogs</a>
          </li>
          <li>
            <a href="#currentprojects">Current Projects</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
