import React from 'react'
import { Link } from 'react-router-dom';
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";

export default function Nav() {
  return (
    <div>

<div className="container1" style={{ backgroundColor: "black"  }}>
        <div style={{padding:"5px 5px px 5px"}}>
          <p
          style={{
            color: "#ff414d",
            fontSize: "15px",
            // padding: "5px 5px 5px 10px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          {" "}
          <span>Free Call &nbsp;
          +1 234 456 78910 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{justifyContent:"right",direction:"rtl",textAlign:"right" , fontSize:"10px"}}>FACEBOOK &nbsp;&nbsp; TWITTER&nbsp;&nbsp;&nbsp; DRIBBLE&nbsp;&nbsp;</span></span></p>
          
        </div>
      </div>
      
      <div className="containerr">
      <nav
        className="navbar navbar-inverse"
        style={{
          marginBottom: "0px",
          position: "absolute",
          width: "100%",
          backgroundColor: "transparent",
          border: "0px",
        }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"></a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="#">
                <ShieldMoonIcon
                  style={{
                    position: "absolute",
                    color: "#ff414d",
                    margin: "50px 10px 0px 0px",
                  }}
                  sx={{ fontSize: 50 }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  style={{
                    position: "absolute",
                    margin: "50px 0px 0px 20px",
                    fontSize: "35px",
                  }}
                >
                  Directone
                  <br />
                  <span style={{ fontSize: "13px" }}>
                    DIRECTORY AND LISTING
                  </span>
                </span>
              </a>
            </li>
            <li className="activee">
              <a   href="#">
                <button
                  style={{
                    margin: "60px 0px 0px 170px",
                    backgroundColor: "transparent",
                    border: "0px",
                    fontSize: "18px",
                  }}
                >
                 <Link style={{color:"gray" , textDecoration:"none"}} to="/">Home</Link>
                </button>
              </a>
            </li>
            <li className="dropdownn">
              <a href="#">
                <button
                  style={{
                    margin: "60px 0px 0px 10px",
                    backgroundColor: "transparent",
                    border: "0px",
                    fontSize: "18px",
                  }}
                >
                 <Link style={{color:"gray" , textDecoration:"none"}} to="/About">About</Link>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  style={{
                    margin: "60px 0px 0px 10px",
                    backgroundColor: "transparent",
                    border: "0px",
                    fontSize: "18px",
                  }}
                >
                  <Link style={{color:"gray" , textDecoration:"none"}} to="/Listing">Listing</Link>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <button
                  style={{
                    margin: "60px 0px 0px 10px",
                    backgroundColor: "transparent",
                    border: "0px",
                    fontSize: "18px",
                  }}
                >
                  <Link style={{color:"gray" , textDecoration:"none"}} to="/Card">Blogs</Link>
                </button>
              </a>
            </li>
            <li>
              <a >
                <button
                  style={{
                    margin: "60px 0px 0px 10px",
                    backgroundColor: "transparent",
                    border: "0px",
                    fontSize: "18px",
                    color:"gray"
                  }}
                >
                  CONTACT
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  style={{
                    margin: "40px 0px 0px 10px",
                    padding: "15px 15px 15px 15px",
                    backgroundColor: "#ff414d",
                    borderRadius: "10px",
                    fontSize: "14px",
                  }}
                >
                  + ADD LISTING
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>

    </div>
  )
}
