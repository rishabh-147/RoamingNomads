import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImg from "../images/corousel-img-1.jpg";
import "../components/style/Login.css";
import logo from "../images/roaming-nomads-logo.png";
import MadeWithLove from "../components/MadeWithLove";
import NavbarNoLogin from "../components/NavbarRegister";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "rememberMe") {
      setRememberMe(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {};

    if (email === "") {
      errors.email = "Please enter your email";
    } else {
      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
      }
    }

    if (password === "") {
      errors.password = "Please enter your password";
    }

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.get(
          `https://localhost:44335/api/Customer/${email}`
        );
        if (response.data) {
          console.log("Successful login" + email); //Debug
          const cEmail = email;
          navigate("/Welcome", { state: { cEmail } });
        } else {
          errors.email = "Invalid email or password";
          errors.password = "Invalid email or password";
          setErrors(errors);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="LoginBody">
      <NavbarNoLogin />
      <div className="justify-content-left">
        <div className="LoginContent ">
          <div
            className="card LoginCard mx-auto position-relative ml-auto"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <div className="card-body">
              <img
                src={logo}
                alt="logo"
                className="position-absolute top-0 end-0 m-3"
                style={{
                  paddingRight: "20px",
                  paddingTop: "20px ",
                  width: "10rem",
                }}
              />
              <form className="px-4 py-3" onSubmit={handleSubmit}>
                <h3 className="lead">Sign In</h3>
                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={handleInputChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </form>
              <div className="mt-3">
                <MadeWithLove />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
