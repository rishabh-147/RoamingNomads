import React from "react";
import Footer from "../components/Footer";

import NavbarLogOut from "../components/NavbarLogOut";
import Logo from "../images/roaming-nomads-aboutUs.png";
import "../components/style/AboutUs.css";
import gif from "../images/aboutUs-GIF.gif";
import "bootstrap/dist/css/bootstrap.min.css";
function AboutUs() {
  return (
    <>
      <NavbarLogOut />

      <div class="card mb-3 mt px-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={Logo}
              class="img-fluid rounded-start aboutUs-img"
              alt="Roaming Nomads"
            />
            <div
              style={{ width: "100%", height: "300px", position: "relative" }}
            >
              <img
                src={gif}
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                class="giphy-embed"
                allowFullScreen
              ></img>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">About Us</h5>
              <hr className=" mt-0 d-inline-block mx-auto" />
              <div class="card-text ">
                {" "}
                <p class="lead desc text-justify">
                  {" "}
                  Welcome to Roaming Nomad, a travel agency dedicated to
                  providing you with exceptional travel experiences.{" "}
                </p>{" "}
                <p className="text-justify">
                  {" "}
                  Our team of seasoned travel experts is passionate about
                  exploring the world and helping you create unforgettable
                  memories. In this About Us section, we'll give you a glimpse
                  into our company's mission, values, and what sets us apart
                  from other travel agencies.{" "}
                </p>{" "}
                <p className="text-justify">
                  {" "}
                  At Roaming Nomad, our mission is to help you discover the
                  world's wonders and create unforgettable memories along the
                  way. We believe that travel is not just about visiting new
                  places but also about immersing yourself in the local culture,
                  meeting new people, and expanding your horizons. Our team of
                  travel experts is dedicated to curating unique experiences
                  tailored to your preferences and travel style, whether you're
                  looking for a relaxing beach vacation or an adventurous trek
                  through the mountains.{" "}
                </p>{" "}
                <p className="text-justify">
                  {" "}
                  We pride ourselves on our personalized approach to travel
                  planning, taking the time to get to know you and your travel
                  goals. Our team of experts has extensive knowledge and
                  expertise in a wide range of destinations, ensuring that you
                  receive the most up-to-date and comprehensive information
                  about your chosen destination. We also work with a network of
                  trusted partners, including hotels, tour operators, and travel
                  providers, to ensure that you receive the best possible
                  service and value for your money.{" "}
                </p>{" "}
                <p className="text-justify">
                  {" "}
                  At Roaming Nomad, we believe in responsible and sustainable
                  travel, and we are committed to minimizing our impact on the
                  environment and local communities. We work with local partners
                  and suppliers who share our values and strive to make a
                  positive impact on the destinations we visit. We also offer
                  travel experiences that allow you to give back to the local
                  community, such as volunteering or participating in
                  sustainable tourism initiatives.{" "}
                </p>{" "}
                <p className="text-justify">
                  {" "}
                  In conclusion, Roaming Nomad is a travel agency dedicated to
                  providing exceptional travel experiences that allow you to
                  explore the world, immerse yourself in new cultures, and
                  create unforgettable memories. Our personalized approach to
                  travel planning, extensive knowledge and expertise, commitment
                  to responsible and sustainable travel, and network of trusted
                  partners set us apart from other travel agencies. We look
                  forward to helping you plan your next adventure and creating
                  memories that will last a lifetime.{" "}
                </p>{" "}
              </div>

              {/* Author Name use bootstrap */}
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
