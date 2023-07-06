import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/Register.css";
import logo from "../images/roaming-nomads-logo.png";
import MadeWithLove from "../components/MadeWithLove";
import NavbarLogin from "../components/NavbarLogIn";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    PhoneNo: "", // Changed from "phone" to "PhoneNo"
    address: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, PhoneNo, address, email, password } = formData; // Changed "phone" to "PhoneNo"
    const validationErrors = validateForm(name, PhoneNo, address, email, password); // Changed "phone" to "PhoneNo"
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make API call to post the form data
        const response = await axios.post("https://localhost:44335/api/Customer", {
          name,
          PhoneNo, // Changed "phone" to "PhoneNo"
          address,
          email,
          password,
        });
        console.log("Form submitted successfully");
        console.log("Response:", response.data);

        // Navigate to the login page
        navigate("/");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (name, PhoneNo, address, email, password) => { // Changed "phone" to "PhoneNo"
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!PhoneNo) { // Changed "phone" to "PhoneNo"
      errors.PhoneNo = "Phone number is required"; // Changed "phone" to "PhoneNo"
    } else if (!/^[0-9]{10}$/.test(PhoneNo)) { // Changed "phone" to "PhoneNo"
      errors.PhoneNo = "Invalid phone number"; // Changed "phone" to "PhoneNo"
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const { name, PhoneNo, address, email, password } = formData; // Changed "phone" to "PhoneNo"

  return (
    <div className="RegBody">
     
      <div className="RegContent row justify-content-start">
        <div className="col-md-25" style={{ marginLeft: "60px" }}>
        
          <div
            className="card RegCard"
            style={{ backdropFilter: "blur(5px)", borderRadius: "10px", }}
          > <img
          src={logo}
          alt="logo"
          className="position-relative top-3 end-5 m-3"
          style={{
            paddingRight: "20px",
            paddingTop: "20px",
            width: "20rem",
            
          }}
        />
            <div className="card-body">
              <h3 className="fw-4">Register</h3> 
              <form className="px-4 py-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className={`form-control ${errors.PhoneNo ? "is-invalid" : ""}`} // Changed "phone" to "PhoneNo"
                    id="phone"
                    name="PhoneNo" // Changed "phone" to "PhoneNo"
                    value={PhoneNo} // Changed "phone" to "PhoneNo"
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                  {errors.PhoneNo && ( // Changed "phone" to "PhoneNo"
                    <div className="invalid-feedback">{errors.PhoneNo}</div> // Changed "phone" to "PhoneNo"
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? "is-invalid" : ""}`}
                    id="address"
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
            <MadeWithLove />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Register;
