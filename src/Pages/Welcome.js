import { Carousel } from "react-carousel-minimal";
import img1 from "../images/corousel-img-1.jpg";
import img2 from "../images/corousel-img-2.jpg";
import img3 from "../images/corousel-img-3.jpg";
import "../components/style/Welcome.css";
import Explore from "@mui/icons-material/Explore";
import NavbarLogOut from "../components/NavbarLogOut";
import Footer from "../components/Footer";
import TravelCards from "../components/blogs/TravelBlogCards";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.cEmail;
  const data = [
    {
      image: img1,
      caption: "San Francisco",
    },
    {
      image: img2,
      caption: "Scotland",
    },
    {
      image: img3,
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const handlePlans = () => {
    const cEmail = userEmail;
    navigate("/plans", { state: { cEmail } });
  };
  return (
    <>
      <NavbarLogOut />
      <div className="Navbar">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "0 2px",
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="650px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              //slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="black"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                //maxWidth: "850px",
                //maxHeight: "500px",
                margin: "40px auto",
                marginTop: "80px",
              }}
            />
          </div>
        </div>

        <div className="welcome-address" style={{ textAlign: "center" }}>
          <h2 className="display-4">Welcome to Roaming Nomads</h2>
          <p className="lead">
            Roaming Nomads is a term used to refer to individuals or groups of
            people who lead a nomadic lifestyle,
          </p>
          <p className="lead">
            The life of Roaming Nomads is one of the most fascinating and unique
            ways of living on this planet. These individuals and communities
            have developed a deep understanding of the natural world and have
            honed their survival skills to an extraordinary degree.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <Link to="/plans"> */}
            <button
              variant="contained"
              color="primary"
              className="btn btn-primary"
              style={{ marginBottom: "20px" }}
              onClick={handlePlans}
              >
              Explore With Us{"  "}
              <Explore />
            </button>
          {/* </Link> */}
        </div>
      </div>
      <TravelCards />
      <Footer />
    </>
  );
}

export default Welcome;
