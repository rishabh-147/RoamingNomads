import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerProfile = () => {
  const customer = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, City, Country",
  };

  return (
    <div className="container mt-4">
      <h1>Customer Profile</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {customer.name}</h5>
          <p className="card-text">Email: {customer.email}</p>
          <p className="card-text">Address: {customer.address}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
