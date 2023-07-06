import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/Payments.css";
import { useNavigate, useLocation } from "react-router-dom";

const Payments = () => {
  const [paymentType, setPaymentType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const customerEmail = location.state?.customerEmail;
  console.log("cEmail:", customerEmail);

  const ChosenPlan = JSON.parse(localStorage.getItem("ChosenPlan"));

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "paymentType") {
      setPaymentType(value);
    } else if (name === "cardNumber") {
      setCardNumber(value);
    } else if (name === "expiryDate") {
      setExpiryDate(value);
    } else if (name === "cvv") {
      setCvv(value);
    } else if (name === "bankName") {
      setBankName(value);
    } else if (name === "bankAccountNumber") {
      setBankAccountNumber(value);
    } else if (name === "upiId") {
      setUpiId(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const newErrors = {};

    if (paymentType === "") {
      newErrors.paymentType = "Please select a payment type.";
    }

    if (
      paymentType === "card" &&
      (cardNumber === "" || expiryDate === "" || cvv === "")
    ) {
      newErrors.card = "Please fill in all the card details.";
    }

    if (
      paymentType === "netbanking" &&
      (bankName === "" || bankAccountNumber === "")
    ) {
      newErrors.netbanking = "Please fill in all the net banking details.";
    }

    if (paymentType === "upi" && upiId === "") {
      newErrors.upi = "Please fill in the UPI ID.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    

    // Submit the form if validation passes
    console.log("Form submitted successfully!");
    const userEmail = customerEmail;
    navigate("/bookingdetail", { state: { userEmail } });
  };

  return (
    <div className="bg-pay">
      <div className="container-fluid Payments">
        <div className="row ">
          <div className="col-md-5 ">
            <div className="card trans-bg">
              <div className="card-header">
                <h3 className="text-center">Make Payment</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="paymentType">Payment Type</label>
                    <select
                      className={`form-control ${
                        errors.paymentType && "is-invalid"
                      }`}
                      id="paymentType"
                      name="paymentType"
                      value={paymentType}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select Payment Type --</option>
                      <option value="card">Card</option>
                      <option value="netbanking">Net Banking</option>
                      <option value="upi">UPI</option>
                    </select>
                    {errors.paymentType && (
                      <div className="invalid-feedback">
                        {errors.paymentType}
                      </div>
                    )}
                  </div>
                  {paymentType === "card" && (
                    <div>
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.card && "is-invalid"
                          }`}
                          id="cardNumber"
                          name="cardNumber"
                          value={cardNumber}
                          onChange={handleInputChange}
                        />
                        {errors.card && (
                          <div className="invalid-feedback">{errors.card}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.card && "is-invalid"
                          }`}
                          id="expiryDate"
                          name="expiryDate"
                          value={expiryDate}
                          onChange={handleInputChange}
                        />
                        {errors.card && (
                          <div className="invalid-feedback">{errors.card}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="password"
                          className={`form-control ${
                            errors.card && "is-invalid"
                          }`}
                          id="cvv"
                          name="cvv"
                          value={cvv}
                          onChange={handleInputChange}
                        />
                        {errors.card && (
                          <div className="invalid-feedback">{errors.card}</div>
                        )}
                      </div>
                    </div>
                  )}
                  {paymentType === "netbanking" && (
                    <div>
                      <div className="form-group">
                        <label htmlFor="bankName">Bank Name</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.netbanking && "is-invalid"
                          }`}
                          id="bankName"
                          name="bankName"
                          value={bankName}
                          onChange={handleInputChange}
                        />
                        {errors.netbanking && (
                          <div className="invalid-feedback">
                            {errors.netbanking}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="bankAccountNumber">
                          Bank Account Number
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.netbanking && "is-invalid"
                          }`}
                          id="bankAccountNumber"
                          name="bankAccountNumber"
                          value={bankAccountNumber}
                          onChange={handleInputChange}
                        />
                        {errors.netbanking && (
                          <div className="invalid-feedback">
                            {errors.netbanking}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {paymentType === "upi" && (
                    <div>
                      <div className="form-group">
                        <label htmlFor="upiId">UPI ID</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.upi && "is-invalid"
                          }`}
                          id="upiId"
                          name="upiId"
                          value={upiId}
                          onChange={handleInputChange}
                        />
                        {errors.upi && (
                          <div className="invalid-feedback">{errors.upi}</div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="order">Order</label>
                    <input
                      type="text"
                      className="form-control"
                      id="order"
                      name="order"
                      value={ChosenPlan.n}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      name="amount"
                      value={ChosenPlan.pr}
                      disabled
                    />
                  </div>

                  <button type="submit" className="btn btn-success">
                    Make Payment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ======================================ORDER CARD =================================================== */}
          <div className="col-md-4">
            <div className="card bg-transparent trans-bg">
              <div className="card-header">
                <h3 className="text-center">Booking Summary</h3>
              </div>
              <div className="card-body">
                <div
                  className="card mb-3 bg-transparent"
                  style={{ maxWidth: "540px", backdropFilter: "inherit" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={ChosenPlan.pImg}
                        className="img-fluid rounded-start "
                        alt="..."
                        style={{ backdropFilter: "blur(5px)" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* Plan Name */}
                        <h5 className="card-title" id="orderName">
                          Plan Name: {ChosenPlan.n}
                        </h5> 

                        <p className="card-text" id="planPrice">
                          <b>Price: {ChosenPlan.pr}</b>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Kindly complete the payment to proceed with the
                            booking.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
