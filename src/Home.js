import React from 'react'
import "./App.css";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HotelIcon from "@mui/icons-material/Hotel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SoapIcon from "@mui/icons-material/Soap";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LiquorIcon from "@mui/icons-material/Liquor";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FestivalIcon from "@mui/icons-material/Festival";
import TheatersIcon from "@mui/icons-material/Theaters";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PhoneIcon from "@mui/icons-material/Phone";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div id='bodyi' style={{height: "580px"}}>
      
      
      
      
      <div className="kkf2">
        <span
          style={{
            position: "absolute",
            fontSize: "50px",
            margin: "170px 0px 0px -170px",
            // display:"flex",
            // justifyContent:"center",
            textAlign: "center",
            // text: "Center",
            color: "white",
            textShadow: "10px",
          }}
        >
          <b>
            {" "}
            Let's Explore <br />
            Your Awesome <br />
            City{" "}
          </b>
        </span>
      </div>
      <div
        className="kkf1"
        style={{
          position: "absolute",
          fontSize: "16px",
          margin: "400px 0px 0px 300px",
          color: "gray",
        }}
      >
        Find great places to stay, eat, shop, or visit from local experts.
      </div>
      <div className="navbar1">
        <nav
          class="navbar navbar-default"
          style={{
            backgroundColor: "white",
            position: "absolute",
            border: "0px",
            marginTop: "45%",
            
          }}
        >
          <div className="kussss">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <span>
                  <SearchIcon />
                </span>
                <input
                  style={{
                    width: "100px",
                    // fontSize: "14px",
                    outline: "none",
                    border: "0px",
                    width:"135px"
                   
                  }}
                  type="text"
                  placeholder="what are you lo"
                />
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="activee">
                <a class="navbar-brand" href="#">
                <span>
                  <LocationOnIcon />
                </span>
                <input
                  style={{
                    width: "100px",
                    // fontSize: "14px",
                    outline: "none",
                    border: "0px",
                    width:"135px"
                   
                  }}
                  type="text"
                  placeholder="Search Location"
                />
              </a>
              </li>
              
              <li class="dropdown show">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">All Categories
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Food&Drinks</a></li>
          <li><a href="#">Hotel</a></li>
          <li><a href="#">Shopping</a></li>
          <li><a href="#">Beauty</a></li>
          <li><a href="#">Fitness</a></li>
          <li><a href="#">Bar&Club</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">Theather</a></li>
          <li><a href="#">Circus</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Health</a></li>
        </ul>
      </li>
            
            
              <li style={{backgroundColor:"#ff414d" , color:"white" ,borderRadius:"18%"}}>
              <a class="navbar-brand" href="#">
                <span style={{}}>
                  <SearchIcon style={{color:"white" ,}}/>
                </span>
                <input
                  style={{
                    width: "100px",
                    // fontSize: "14px",
                    outline: "none",
                    border: "0px",
                    backgroundColor:"#ff414d",
                    textAlign:"center",
                    width:"60px"
                  }}
                  type="text"
                  placeholder="Search"
                />
              </a>
              </li>
             
            </ul>
          </div>
        </nav>

      </div>
    </div>

    <section className="card" style={{marginTop:"-30px"}}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 services-wrap">
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{}}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <FastfoodIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Food & Drink
                    </div>
                    <div id="cardhover3">103</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a
                  href="#"
                  className="services active"
                  style={{ marginTop: "50%" }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <HotelIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Hotels
                    </div>
                    <div id="cardhover3">40</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <ShoppingCartIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Shopping
                    </div>
                    <div id="cardhover3">100</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <SoapIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Beauty
                    </div>
                    <div id="cardhover3">36</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <FitnessCenterIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Fitness
                    </div>
                    <div id="cardhover3">30</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <LiquorIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Bar & Clubs
                    </div>
                    <div id="cardhover3">103</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <SportsEsportsIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Games
                    </div>
                    <div id="cardhover3">103</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <AddLocationAltIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Places
                    </div>
                    <div id="cardhover3">40</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <FestivalIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Circus
                    </div>
                    <div id="cardhover3">100</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <TheatersIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Theater
                    </div>
                    <div id="cardhover3">36</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <SportsSoccerIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Sports
                    </div>
                    <div id="cardhover3">30</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                id="cardhoverr"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{ marginRight: "15px" }}
              >
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "60px 0px 30px 0px",
                    }}
                  >
                    <HealthAndSafetyIcon
                      id="cardhover1"
                      sx={{ fontSize: 70 }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        margin: "auto",
                      }}
                    />
                    <div id="cardhover2" style={{ marginTop: "10px" }}>
                      Health
                    </div>
                    <div id="cardhover3">12</div>
                    <div id="cardhover4">Listings</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div style={{ textAlign: "center", marginTop: "70px"}}>
        <span style={{ color: "red" }}>OUR LISTING</span>
        <br />
        <span style={{ fontSize: "50px" }}>Popular Listing</span>
      </div>

      {/* 1    */}
      <section className="card" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 services-wrap">
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 40px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-1.jpg.webp"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <FastfoodIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      Food & Drink
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Japanese <br /> Restaurant
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 2        */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-2.jpg.webp"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <HotelIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      Hotel
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Harbor Lights <br />
                      Hotel
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 3       */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-1.jpg.webp"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <ShoppingCartIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      SHOPPING
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      MS Center Mall <br /> of Asia
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 4   */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-4.jpg"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <FitnessCenterIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      GYM FITNESS
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Maxout Fitness <br /> Gym
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-intro bg-light" style={{ marginTop: "100px" }}>
        <div class="container">
          <div class="row g-0" style={{ backgroundColor: "#ff414d" }}>
            <div class="col-md-4 d-flex align-items-stretch">
              <div class="img w-100">
                <img
                  src="https://preview.colorlib.com/theme/directone/images/intro.jpg.webp"
                  style={{
                    height: "240px",
                    width: "310px",
                    margin: "0px 0px 0px -15px ",
                  }}
                />
              </div>
            </div>
            <div class="col-md-8 aside-stretch aside">
              <div class="row py-md-4">
                <div class="col-md-8 d-flex align-items-center ">
                  <div class="text pt-5 pb-md-5 pb-3 pl-md-5 px-4">
                    <div
                      style={{ margin: "60px 0px 0px 0px " }}
                      class="subheading"
                    >
                      Special Offers
                    </div>
                    <h2>We Have Special Offers Every Now and Then</h2>
                  </div>
                </div>
                <div class="col-md-4 d-flex align-items-center">
                  <div class="px-4 px-md-0 pb-4 pb-md-0">
                    <p
                      style={{
                        margin: "100px 0px 0px 0px",
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px 20px 10px 20px",
                        textAlign: "center",
                        borderRadius: "5px",
                      }}
                    >
                      <a href="#" class="btn btn-darken py-3 px-4">
                        Show Special <br /> Offers
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <span style={{ color: "red" }}>LISTING</span>
        <br />
        <span style={{ fontSize: "50px" }}>Our Listing</span>
      </div>

      {/* 1    */}
      <section className="card" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 services-wrap">
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 40px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-1.jpg.webp"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <FastfoodIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      Food & Drink
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Japanese <br /> Restaurant
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 2        */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-2.jpg.webp"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <HotelIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      Hotel
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Harbor Lights <br />
                      Hotel
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 3       */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-1.jpg.webp"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <ShoppingCartIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      SHOPPING
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      MS Center Mall <br /> of Asia
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 4   */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://preview.colorlib.com/theme/directone/images/list-4.jpg"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <FitnessCenterIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      GYM FITNESS
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Maxout Fitness <br /> Gym
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 40px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxkI07nHexe_9vS8jw7OKUzSFQzTuZv77VA&usqp=CAU"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <FastfoodIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      Food & Drink
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Japanese <br /> Restaurant
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 2        */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX3mV_uqsba32TOJJRqvw3V1ndMuUCIwABTBNhYotqaDyz_BmrwU9tlyCN3i3QKCOuOs&usqp=CAU"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <HotelIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      Hotel
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Harbor Lights <br />
                      Hotel
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 3       */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <ShoppingCartIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      SHOPPING
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      MS Center Mall <br /> of Asia
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 4   */}
              <div
                className="col-md-4 col-lg-2 text-center d-flex align-items-stretch aos-init aos-animate"
                // id="cardhoverr1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                style={{
                  width: "200px",
                  height: "550px",
                  backgroundColor: "whitesmoke",
                  padding: "0px 0px 0px 0px",
                  margin: "0px 25px 25px 0px",
                }}
              >
                <span>
                  <img
                    style={{ height: "250px", width: "200px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU"
                  />
                </span>
                <a className="cards" style={{ marginTop: "50%" }}>
                  <div
                    style={{
                      width: "auto",
                      height: "180px",
                      margin: "-50px 0px 30px 0px",
                    }}
                  >
                    <span>
                      <FitnessCenterIcon
                        // id="cardhover1"
                        sx={{ fontSize: 70 }}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          margin: "auto",
                          color: "#ff414d",
                        }}
                      />
                    </span>
                    <div
                      // id="cardhover2"
                      style={{ marginTop: "20px", color: "#ff414d" }}
                    >
                      GYM FITNESS
                    </div>
                    <div
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                      id="cardhover33"
                    >
                      Maxout Fitness <br /> Gym
                    </div>
                    <div
                    // id="cardhover44"
                    >
                      <span>
                        <AddLocationAltIcon style={{ marginRight: "7px" }} />
                      </span>
                      Suite 721 New York NY
                      <br />
                      <span style={{ marginTop: "30px " }}>10016</span>
                      <br />
                      <span>
                        <PhoneIcon style={{ marginRight: "7px" }} />
                      </span>
                      +00 123 456 7890
                      <br />
                      <hr style={{ color: "black" }} />
                      <div>
                        <a
                          style={{ color: "black", margin: "0px 10px 0px 0px" }}
                        >
                          Review 5.0/5
                        </a>
                        <a>
                          {" "}
                          <StarBorderIcon
                            sx={{ fontSize: 25 }}
                            style={{ color: "yellow" }}
                          />
                        </a>
                        <br />
                        <div style={{ margin: "7px 0px 0px 0px" }}>(100)</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="ftco-intro bg-light" style={{ marginTop: "100px" }}>
        <div class="container">
          <div class="row g-0" style={{}}>
            <div class="col-md-4 d-flex align-items-stretch">
              <div class="img w-100">
                <img
                  src="https://preview.colorlib.com/theme/directone/images/about.jpg.webp"
                  style={{
                    height: "800px",
                    width: "400px",
                    margin: "0px 0px 0px -15px ",
                  }}
                />
              </div>
            </div>
            <div class="col-md-8 aside-stretch aside">
              <div class="row py-md-4">
                <div class="col-md-8 d-flex align-items-center ">
                  <div class="text pt-5 pb-md-5 pb-3 pl-md-5 px-4">
                    <div
                      style={{ margin: "100px 0px 0px 90px ", color: "red" }}
                      class="subheading"
                    >
                      WELCOME TO DIRECTONE
                    </div>
                    <div
                      style={{
                        margin: "15px 0px 0px 90px ",
                        fontSize: "50px",
                        width: "550px",
                        textShadow: "10px",
                      }}
                    >
                      Directone A Directory & Listing
                    </div>
                    <p
                      style={{
                        margin: "15px 0px 0px 90px ",
                        width: "550px",
                        fontSize: "15px",
                        color: "gray",
                      }}
                    >
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and <br />
                      Consonantia, there live the blind texts. Separated they
                      live in Bookmarksgrove <br />
                      right at the coast of the Semantics, a large language
                      ocean.
                    </p>
                    <p
                      style={{
                        margin: "15px 0px 0px 90px ",
                        width: "550px",
                        fontSize: "15px",
                        color: "gray",
                      }}
                    >
                      A small river named Duden flows by their place and
                      supplies it with the <br/>necessary regelialia. It is a
                      paradisematic country, in which roasted parts of<br/> sentences
                      fly into your mouth.
                    </p>
                  </div>

                  <div class="col-md-8 aside-stretch aside">
              <div class="row py-md-4">
                
                  <div class="col-md-4 d-flex align-items-left" style={{marginLeft:"90px" , width:"500px" , display:"flex"}}>
                  <div>
                    <p
                      style={{
                        margin: "100px 10px 10px 0px",
                       
                        backgroundColor: "whitesmoke",
                        color: "black",
                        padding: "10px 20px 10px 20px",
                        // textAlign: "center",
                        alignItems:"left",
                        borderRadius: "5px",
                        height:"130px",
                        width:"110px",

                      }}
                    >
                      <p style={{fontSize:"40px" , textAlign
                    :"center"}}>50</p>
                      <span style={{color:"red" , margin:"0px 0px 0px 0px " ,}}>
                      YEARS OF EXPERIENCE
                      </span>
                    </p>
                  </div>

                  <div
                      style={{
                        margin: "100px 10px 10px 0px",
                        // padding: "20px 20px 0px 0px",
                        backgroundColor: "whitesmoke",
                        color: "black",
                        padding: "10px 20px 10px 20px",
                        // textAlign: "center",
                        alignItems:"left",
                        borderRadius: "5px",
                        height:"130px",
                        width:"130px",
                      }}
                    >
                      <p style={{fontSize:"40px"}}>210 </p>
                      <p style={{color:"red" , margin:"0px 0px 0px 0px "}}>
                      TOTAL LISTING
                      </p>
                   
                    </div>

                    <div
                      style={{
                        margin: "100px 10px 10px 0px",
                        // padding: "20px 20px 0px 0px",
                        backgroundColor: "whitesmoke",
                        color: "black",
                        padding: "10px 20px 10px 20px",
                        // textAlign: "center",
                        alignItems:"left",
                        borderRadius: "5px",
                        height:"130px",
                        width:"130px",
                      }}
                    >
                      <p style={{fontSize:"40px"}}>450 </p>
                      <p style={{color:"red" , margin:"0px 0px 0px 0px "}}>
                      COMPANY STAF
                      </p>
                   
                    </div>

                    <div
                      style={{
                        margin: "100px 10px 10px 0px",
                        // padding: "20px 20px 0px 0px",
                        backgroundColor: "whitesmoke",
                        color: "black",
                        padding: "10px 20px 10px 20px",
                        // textAlign: "center",
                        alignItems:"left",
                        borderRadius: "5px",
                        height:"130px",
                        width:"130px",
                      }}
                    >
                      <p style={{fontSize:"40px"}}>100 </p>
                      <p style={{color:"red" , margin:"0px 0px 0px 0px "}}>
                      HAPPY PEOPLE
                      </p>
                   
                    </div>


                </div>
                
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
