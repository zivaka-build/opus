/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div className="link__section">
        <ul>
          <li>
            <a href="#">Vision</a>
          </li>
          <li>
            <a href="#">Milestone</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Current Projects</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
