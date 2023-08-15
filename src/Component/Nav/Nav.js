import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";
// import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              {/* <button className="btn btn-outline-primary" type="submit">
                Search
              </button> */}
              <div
                className={`form-check mx-3 form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input success"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className="form-check-label"
                  htmlfor="flexSwitchCheckDefault "
                >
                  {props.text} Dark
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Nav.propTypes = { title: PropTypes.string.isRequired };
Nav.defaultProps = { title: "Set title here" };
