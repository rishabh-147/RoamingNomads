import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../components/style/BookingDetailsTable.css';
import NavbarLogout from '../../components/NavbarLogOut'

function BookingDetailsTable() {
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get("https://localhost:44335/api/booking_details"); // Replace with the appropriate API endpoint
        setBookingDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookingDetails();
  }, []);

  return (
    <div className="booking-details-table">
        <NavbarLogout/>
      <h1 className="text-center text-decoration-underline mt-1 mb-3" style={{color:"white"}}>Booking Details</h1>
      <table className="table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Agent ID</th>
            <th>Agent Name</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Travel Plan ID</th>
            <th>Travel Plan Details</th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((booking) => (
            <tr key={booking.id}>
              <td>BID202300{booking.id}</td>
              <td>AID202300{booking.agent_id}</td>
              <td>{booking.agent.name}</td>
              <td>CID202300{booking.customer_id}</td>
              <td>{booking.customer.name}</td>
              <td>{booking.travel_plans}</td>
              <td>{booking.travel_plan.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingDetailsTable;
