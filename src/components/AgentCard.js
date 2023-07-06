import { useLocation, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import axios from "axios";

function AgentCard({ id, Name, PhoneNo, Email, Address, Password }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const updateAgent = () => {
    navigate("/AdminUpdateForm", { state: { id, Name, PhoneNo, Email, Address, Password} });
  };

  const deleteAgent = () => {
    const url = "https://localhost:44335/api/Agent";

    axios
      .delete(`${url}?AgentId=${id}`)
      .then((response) => {
        // Agent deleted successfully
        console.log("Agent deleted successfully");
      })
      .catch((error) => {
        // Handle the error case if the delete request fails
        console.error("Failed to delete agent", error);
      });
  };

  return (
    <div className="col card card-small">
  <div className="card-body">
    <h5 className="card-title">
      {Name} - A00{id}
    </h5>
    <div className="row">
      <div className="col fs-5">
        <b>Agent ID:</b> A00{id}
      </div>
      <div className="col fs-5">
        <b>Name:</b> {Name}
      </div>
      <div className="col fs-5">
        <b>Phone No:</b> {PhoneNo}
      </div>
      <div className="col fs-5 mt-3">
        <b>Email ID:</b> {Email}
      </div>
      <div className="col fs-5 mt-3">
        <b>Address:</b> {Address}
      </div>
    </div>

    <div className="row mt-3">
      <div className="col">
        {currentPath === "/AdminBoard" && (
          <button className="btn btn-danger book-btn" onClick={updateAgent}>
            Edit <KeyboardDoubleArrowRight />
          </button>
        )}
      </div>
      <div className="col">
        {currentPath === "/AdminBoard" && (
          <button className="btn btn-warning book-btn" onClick={deleteAgent}>
            Delete <KeyboardDoubleArrowRight />
          </button>
        )}
      </div>
    </div>
  </div>
</div>

  );
}

export default AgentCard;
