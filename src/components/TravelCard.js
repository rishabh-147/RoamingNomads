import { useLocation } from "react-router-dom";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";

function TravelCards({ id, Name, Price, PlanImg, Places, PlanDesc, bookPlan }) {
  const location = useLocation();
  const currentPath = location.pathname;

  function planChosen() {
    localStorage.setItem(
      "ChosenPlan",
      JSON.stringify({
        i: id,
        n: Name,
        pr: Price,
        pImg: PlanImg,
        pl: Places,
        pDesc: PlanDesc,
      })
    );
    bookPlan();
  }

  return (
    <div class="col card card-small">
      <img src={PlanImg} alt="..." style={{height: "398px"}}/>
      <div className="card-body">
        <h5 className="card-title">
          {Name}{" "}
          <span className="badge rounded-pill text-bg-success bg-warning">
            New
          </span>
        </h5>
        <p className="card-text justifyCenter">{PlanDesc}</p>
        <div className="row">
          <label className="col fs-8">Places: {Places}</label>
          <label class="col fs-5">
            <b>Price: ₹</b>{Price}
          </label>

          {currentPath === "/plans" && (
            <button className="btn btn-danger book-btn" onClick={planChosen}>
              Book Now <KeyboardDoubleArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelCards;
