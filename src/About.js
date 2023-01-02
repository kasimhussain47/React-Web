import React from "react";
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

export default function About() {
  return (
    <div id='bodyabout'>
      
      <div style={{ textAlign: "center", marginTop: "35%" , height:"400px"}}>
        <span style={{ color: "gray" ,fontSize: "20px" }}>OUR LISTING</span>
        <br />
        <span style={{ fontSize: "70px" , color:"whitesmoke" , textShadow:"50px" }}><b>Popular Listing</b></span>
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


    </div>
  )
}
