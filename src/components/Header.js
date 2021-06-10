import React from "react";
import { Link } from "react-router-dom";
import Oauth from "./Oauth";

const Header = function () {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mx-2">
        Streamify
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Streams
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/streams/show" className="nav-link">
              show
            </Link>
          </li>
          <li className="nav-item ">
            <Oauth />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
