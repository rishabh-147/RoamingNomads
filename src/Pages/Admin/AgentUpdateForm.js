import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../components/style/AgentUpdateForm.css";



function AgentUpdateForm() {
  const [data, setData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  const location = useLocation();

  const { id, Name, PhoneNo, Email, Address, Password } = location.state;




  console.log("Agent Id:", id);
 data.password = Password; //Set the password to default
 
  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://localhost:44335/api/Agent?id=${parseInt(id)}`;

    axios
      .put(url, data)
      .then((response) => {
        // Data updated successfully
        console.log(response.data);
        console.log("Data updated successfully");
      })
      .catch((error) => {
        // Handle the error case if the update request fails
        console.log(data);
        console.error("Failed to update data", error);
      });
  };

  return (
    <div className="card mx-5 px-4 py-4 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={data.id}
            placeholder={id}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder={Name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="number"
            name="phone"
            value={data.phone}
            placeholder={PhoneNo}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder={Email}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        {/* <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={1234567}
            onChange={handleInputChange}
            className="form-control"
          />
        </div> */}
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={data.address}
            placeholder={Address}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Update Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgentUpdateForm;
