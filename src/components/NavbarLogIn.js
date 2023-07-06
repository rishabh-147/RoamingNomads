import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import transLogo from "../images/roaming-nomads-logo-navbar.png";
import { Login, HowToReg } from "@mui/icons-material";
import { Button } from "@mui/material";
import Welcome from "../Pages/Welcome";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
       Roaming Nomads
       "Experience the world like a nomad" 
       </a>  */}

        <a className="navbar-brand" href="/">
          <img src={transLogo} alt="Roaming Nomads" width="80" height="40" />
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
          <ul
            className="navbar-nav me-auto mb-4 mb-lg-2"
            style={{ borderRadius: "5px" }}
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-decoration-none"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}

            <li className="nav-item">
              <Link to="/Admin" className="nav-link ">
                Admin
              </Link>
            </li>

            {/* <li className="nav-item">
            <Link to='/contact'><a className="nav-link" href="#">
                Contact Us
              </a></Link>
            </li> */}

            <li className="nav-item">
              <Link to="/about" className="nav-link ">
                About Us
              </Link>
            </li>
          </ul>
          <span
            className="navbar-text fw-semibold fs-5"
            style={{ paddingRight: "10px" }}
          >
            Experience the world like a nomad
          </span>
          <div
            style={{ display: "flex", alignItems: "center", color: "white" }}
            className="d-grid gap-3 d-md-flex justify-content-md-end"
          >
            <Link to="/" className="text-decoration-none">
              {" "}
              <Button
                className="text-decoration-none"
                variant="outlined"
                color="error"
                startIcon={<Login />}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
