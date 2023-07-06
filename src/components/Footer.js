import React from "react";
import footerLogo from "../images/roaming-nomads-logo.png";
import "./style/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="bg-dark">
        <div className="container welcome-footer">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h3>
                  <a href="/">
                    <img src={footerLogo} height="50px" width="100%" />
                  </a>
                </h3>
                <p className="mb-30 footer-desc">
                  Roaming Nomads is not your average travel company. We
                  specialize in crafting bespoke, off-the-beaten-path travel
                  experiences for modern-day nomads and explorers. From epic
                  hikes to exotic food tours, our trips are designed to inspire
                  and challenge you. Join us and roam the world like a true
                  nomad!
                </p>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
              <div>
                <h4>Quick Link</h4>
                <hr className=" mt-0 d-inline-block mx-auto"/>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-decoration-none text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-decoration-none text-white">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Contact Us</h4>
                <hr className=" mt-0 d-inline-block mx-auto"/>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none text-white">
                      <b>Tel:</b> +91-8960151997
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none text-white">
                      <b>E-Mail:</b> onlinestuff.rishabh@gmail.com
                    </p>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      <b>Address:</b> Chennai, Tamil Nadu, India
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="text-decoration-none text-white">
                      Graphics Design
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Newsletter</h4>
                <div>
                  <label htmlFor="Newsletter" className="form-label">
                    Subscribe To Our Newsletter
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                  <button className="btn btn-danger mt-3">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="copyright">
              <p>
                Developed and maintained by{" "}
                <a href="https://linkedin.com/in/tiwarirt147" target="_blank" className="text-decoration-none">
                  Rishabh Tiwari
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
