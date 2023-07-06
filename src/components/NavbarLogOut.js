import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import transLogo from "../images/roaming-nomads-logo-navbar.png";
import { Login, HowToReg } from "@mui/icons-material";
import { Button } from "@mui/material";
import Welcome from "../Pages/Welcome";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}

            <li className="nav-item">
              <Link to="/Admin" className="nav-link">
                Admin
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/about" className="nav-link">
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
            

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <PersonIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <Link to="/Profile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link> */}
            
              <Link to="/ ">  < MenuItem className="text-decoration-none" onClick={handleClose}>Logout</MenuItem></Link>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
