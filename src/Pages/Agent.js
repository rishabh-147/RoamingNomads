// Agent.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../apiConfig";
import NavbarLogOut from '../components/NavbarLogOut';
import Footer from "../components/Footer";

const Agent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/Agent`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      <NavbarLogOut/>
      {/* Display the fetched data */}
      {data.map((item) => (
             <div key={item.id}>
             <div>Name: {item.name}</div>
             <div>Phone: {item.phone}</div>
             <div>Email: {item.email}</div>
           </div>
      ))}
      <Footer/>
    </div>
  );
};

export default Agent;
