import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  // const { title, searchBar } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title} No:{props.number}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          {/* 1st way */}
          {/* js inside {}, if searchBar is true show form else show "No SearchBar" using ternary operator */}
          {/* {
      props.searchBar? 
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> 
      : "No searchBar" 
    } */}
          {/* 2nd way- execute second function only when left side is true */}
          {props.searchBar && (
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
//Giving default props:in-case props not provided
Navbar.defaultProps = {
  // title:"My default Title",
  searchBar: false
}

// defining types of properties to make app robust, if you give anything eg:'number' instead; it print but give error in console :  err.name = 'Invariant Violation'; 
//Warning: Failed prop type: Invalid prop `title` of type `boolean` supplied to `Navbar`, expected `string`.
Navbar.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool
}