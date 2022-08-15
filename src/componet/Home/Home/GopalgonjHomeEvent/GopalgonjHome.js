import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const GopalgonjHome = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1A5276"
          fill-opacity="1"
          d="M0,192L1440,96L1440,0L0,0Z"
        ></path>
      </svg>
      <h2 className="event-style">Annaul tour 2022</h2>
      <p className="event-style">Tongipara Gopalgonj</p>
      <Container>
        <div style={{}} className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <Card>
              <Card.Img
                className="mana-img-teacher"
                variant="top"
                src="https://i.postimg.cc/tCGtyS1C/28cc19b6-3c3d-4484-af42-f435a3e904a5.jpg"
              />
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <Card>
              <Card.Img
                className="mana-img-teacher"
                variant="top"
                src="https://i.postimg.cc/NMJndjGG/DSC0373.jpg"
              />
            </Card>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <Card>
              <Card.Img
                className="mana-img-teacher"
                variant="top"
                src="https://i.postimg.cc/SsnW6Snp/DSC0395.jpg"
              />
            </Card>
          </div>
        </div>
        <Link to="/ocation3">
          <Button>
            See more{" "}
            <FontAwesomeIcon
              style={{
                textAlign: "center",
                color: "tomato",
                padding: "10px 5px",
              }}
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </Button>
        </Link>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1A5276"
          fill-opacity="1"
          d="M0,160L120,170.7C240,181,480,203,720,229.3C960,256,1200,288,1320,304L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default GopalgonjHome;
