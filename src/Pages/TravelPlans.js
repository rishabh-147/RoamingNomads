import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TravelCards from "../components/TravelCard";
import axios from "axios";
import { useEffect } from "react";
import '../components/style/TravelPlans.css'

function TravelPlans() {
  const [plans, setPlan] = useState([]);
  const navigate = useNavigate();


  const location = useLocation();
  const cEmail = location.state?.cEmail;
  console.log("cEmail:", cEmail);


  
  useEffect(() => {
    const fetchPlans = async () => {
      await axios.get("https://localhost:44335/api/TravelPlans").then((res) => {
        console.log(res.data);
        setPlan(res.data);
      });
    };
    fetchPlans();
  }, []);

  function handleBookNow() {
    const customerEmail = cEmail;
    navigate("/payment", { state: {customerEmail}});
  }

  return (
    <>
    <div className="row row-cols-2 m-1 gridsTop">
      {plans.map((plan) => (
        <div className="col mb-4" key={plan.id}>
          <TravelCards
            id={plan.id}
            Name={plan.name}
            Price={plan.price}
            PlanImg={plan.planImg}
            Places={plan.places}
            PlanDesc={plan.planDesc}
            bookPlan={handleBookNow}
          />
        </div>
      ))}
    </div>
  </>
  
  );
}

export default TravelPlans;
