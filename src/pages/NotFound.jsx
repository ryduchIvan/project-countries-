//Instruments
import { Link } from "react-router-dom";

export const NotFound = () => {
  return <div style={{
    textAlign: "center"
  }}>
    <h1 >This page doesn't exist. Please click on button!</h1>
    <Link to="/" style={{
      display: "block",
      padding: "20px",
      borderRadius: "40px",
      textDecoration: "none",
      fontSize: "30px",
      width: "400px",
      margin: "50px auto",
      backgroundColor: "black",
      color: "white",
      cursor: "pointer",
    }}>Go to Homepage</Link>
  </div>;
};
