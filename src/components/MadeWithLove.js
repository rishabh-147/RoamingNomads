import { Typography } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    heartIcon: {
      color: "red",
      verticalAlign: "middle",
      margin: "-0.2rem 0.2rem 0 0",
    },
  }));


function MadeWithLove() {
    const classes = useStyles();
    return (
      <Typography className=" text-center" variant="subtitle2">
        Made with <FaHeart className={classes.heartIcon} /> by{" "}
        <span>
          <a
            href="https://linkedin.com/in/tiwarirt147"
            target="_blank"
            className="text-decoration-none fw-bolder"
          >
            Rishabh Tiwari
          </a>
        </span>
      </Typography>
    );
  }

  export default MadeWithLove;