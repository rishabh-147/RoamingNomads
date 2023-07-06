import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/BookingDetail.css";
import QRCode from "../images/bookingQR.png";
import MadeWithLove from "../components/MadeWithLove";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BookingDetails = () => {
  const confirmPlan = JSON.parse(localStorage.getItem("ChosenPlan"));
  const [customerData, setCustomerData] = useState({});


  const location = useLocation();
  const cEmail = location.state?.userEmail;
  console.log("cEmail:", cEmail);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:44335/api/Customer/${cEmail}`
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error(error);
        // Handle error and set appropriate state if needed
      }
    };

    fetchCustomerData();
  });

  return (
    <div className="container-fluid booking-bg">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card booking-card border border-2 border-dark">
            <div className="card-body">
              <h2 className="card-title text-center bg-head">
                Booking Details
              </h2>
              <div className="booking-info">
                <h4 className="plan-name">Travel Plan: {confirmPlan.n}</h4>
                <p>
                  <strong>Places</strong> {confirmPlan.pl}
                </p>

                <p>
                  <strong>Price:</strong> {confirmPlan.pr}
                </p>
              </div>
              <div className="qr-code-container">
                <div className="qr-code border border-dark border-3 text-center">
                  <img src={QRCode} alt="QR Code" />
                </div>
              </div>
              <div className="mt-3">
                <MadeWithLove />
              </div>
            </div>
            <div className="card-footer text-muted border-start">
              <h4 className="card-title">Traveler Information</h4>
              <p>
                <strong>Name: {customerData.name}</strong>
              </p>
              <p>
                <strong>Email: {customerData.email}</strong>
              </p>
              <p>
                <strong>Phone Number: {customerData.phoneNo}</strong>
              </p>
            </div>
          </div>
          <div className="row print-btn">
            <button className="btn btn-info">Print</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
