import React, { useState } from "react";
import "../../components/style/AdminLogin.css";
import NavbarLogOut from "../../components/NavbarLogOut";
import { Height } from "@mui/icons-material";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password match the admin credentials
    if (email === "admin@rn.in" && password === "admin") {
      // Redirect to the other page
      // Replace 'other-page-url' with the desired destination URL
      window.location.href = "/AdminBoard";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyCntent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="mt-5">
          <div className="card AdminLoginCard">
            <div className="card-body">
              <form className="px-4 py-3" onSubmit={handleSubmit}>
                <h3 className="fw-2 text-decoration-underline">Admin Log In</h3>
                <div className="mb-3 mt-4">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </form>
              <div className="mt-3">{/* MadeWithLove component */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
