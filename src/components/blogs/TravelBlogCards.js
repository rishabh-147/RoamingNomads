import React from "react";
import img1 from "../../images/blog1-img1.jpg";
import img2 from "../../images/blog1-img2.jpg";
import img3 from "../../images/blog1.img3.jpg";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import "../style/TravelBlogCards.css";
import { Link } from "react-router-dom";

function TravelBlogCards() {
  return (
    <div
      className="d-grid gap-3 d-md-flex justify-content-md-center px-5 pb-5"
      style={{ width: "auto", height: "auto" }}
    >
      <div className="card-blog grow">
        <div className="card bt-dark" style={{ width: "auto", height: "auto" }}>
          <img
            src={img1}
            className="card-img-top"
            alt="Amazing Beaches"
            height="300px"
            width="100px"
            style={{ borderRadius: "5px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Sunset Serenade</h5>
            <p
              className="card-text fw-semibold text-wrap"
              style={{ textAlign: "justify" }}
            >
              Experience the enchanting beauty of Goa with our Sunset Serenade
              package. Bask in the warm golden hues as the sun sets over
              pristine beaches, serenaded by the gentle lullaby of crashing
              waves. Indulge in vibrant nightlife, relish delectable cuisine,
              and immerse yourself in the laid-back coastal charm of this
              tropical paradise. Unwind, rejuvenate, and create cherished
              memories against the backdrop of Goa's breathtaking sunsets.
            </p>
            {/* <Link to='/payment'className="btn btn-danger book-btn">
              Book Now <KeyboardDoubleArrowRight />
            </Link> */}
          </div>
        </div>
      </div>

      <div className="card-blog grow">
        <div className="card" style={{ width: "auto", height: "auto" }}>
          <img
            src={img2}
            className="card-img-top"
            alt="Hiking Adventure"
            height="300px"
            width="100px"
            style={{ borderRadius: "5px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Mountain Majesty</h5>
            <p
              className="card-text fw-semibold text-wrap"
              style={{ textAlign: "justify" }}
            >
              Traverse the majestic Himalayas and immerse yourself in the
              grandeur of Uttarakhand. Trek through breathtaking trails, witness
              cascading waterfalls, and seek solace in ancient temples. Let the
              snow-capped peaks and pristine lakes captivate your senses as you
              find serenity amidst nature's embrace. Explore the spiritual and
              adventurous side of this mountainous realm, where every step
              reveals the awe-inspiring beauty of Uttarakhand's mountain
              majesty.
            </p>
            {/* <Link to='/payment'>
            <a href="#" className="btn btn-danger book-btn">
              Book Now <KeyboardDoubleArrowRight />
            </a></Link> */}
          </div>
        </div>
      </div>

      <div className="card-blog grow">
        <div className="card" style={{ width: "auto", height: "auto" }}>
          <img
            src={img3}
            className="card-img-top"
            alt="City Exploration"
            height="300px"
            width="100px"
            style={{ borderRadius: "5px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Nature's Haven</h5>
            <p
              className="card-text fw-semibold text-wrap"
              style={{ textAlign: "justify" }}
            >
              Experience the untouched beauty of Jammu and Kashmir, a paradise
              on Earth. Find solace in picturesque valleys, marvel at snow-clad
              mountains, and cruise along serene lakes. Immerse yourself in the
              warm hospitality of the locals as you explore the vibrant culture
              and rich traditions of this captivating region. Unwind,
              rejuvenate, and find inner peace in the lap of nature's haven that
              J&K offers.
            </p>
            {/* <Link to='/payment'>
            <a href="#" className="btn btn-danger book-btn">
              Book Now <KeyboardDoubleArrowRight />
            </a></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlogCards;
