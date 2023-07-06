import React from "react";
import { useLocation } from "react-router-dom";
import AgentCard from "../../components/AgentCard";
import axios from "axios";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";

function AdminDashboard() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgent = async () => {
      await axios.get("https://localhost:44335/api/Agent").then((res) => {
        console.log(res.data);
        setAgents(res.data);
      });
    };
    fetchAgent();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <div className="row row-cols-2 m-1 gridsTop">
        {agents.map((agent) => (
          <div
            className="col mb-3 px-4"
            key={agent.id}
            style={{ marginTop: "100px" }}
          >
            <AgentCard
              id={agent.id}
              Name={agent.name}
              PhoneNo={agent.phone}
              Email={agent.email}
              Address={agent.address}
              Password={agent.password}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
