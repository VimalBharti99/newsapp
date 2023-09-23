import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let [search, setSearch] = useState("");
  function getInputData(e) {
    setSearch(e.target.value);
  }
  function postData(e) {
    e.preventDefault();
    props.changeSearch(search);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand "
            to="/"
            onClick={() => {
              props.changeSearch(" ");
              setSearch("");
            }}
          >
            NewsApp
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    props.changeSearch(" ");
                    setSearch("");
                  }}
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/education"
                  onClick={() => {
                    props.changeSearch(" ");
                    setSearch("");
                  }}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/politics"
                  onClick={() => {
                    props.changeSearch(" ");
                    setSearch("");
                  }}
                >
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  onClick={() => {
                    props.changeSearch(" ");
                    setSearch("");
                  }}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/crime"
                  onClick={() => {
                    props.changeSearch(" ");
                    setSearch("");
                  }}
                >
                  Crime
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/sports"
                      onClick={() => {
                        props.changeSearch(" ");
                        setSearch("");
                      }}
                    >
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/science"
                      onClick={() => {
                        props.changeSearch(" ");
                        setSearch("");
                      }}
                    >science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/technology"
                      onClick={() => {
                        props.changeSearch(" ");
                        setSearch("");
                      }}
                    >Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/bollywood"
                      onClick={() => {props.changeSearch(" ")
                        setSearch("")}}>Bollywood
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/jokes"
                      onClick={() => {
                        props.changeSearch(" ");
                        setSearch("");
                      }}>Jokes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">Language
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => props.changeLanguage("hi")}>Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => props.changeLanguage("en")}>English
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={postData}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                onChange={getInputData}
                placeholder="Search"
                aria-label="Search"
                value={search}
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
