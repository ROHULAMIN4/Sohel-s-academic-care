import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const JahaninagorHome = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#154360"
          fill-opacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,240C480,213,600,139,720,144C840,149,960,235,1080,224C1200,213,1320,107,1380,53.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <h2 className="event-style">Annaul tour 2020</h2>
      <p className="event-style">Sonargaon and panam nagor</p>
      <Container>
        <div style={{}} className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <Card>
              <Card.Img
                className="mana-img-teacher"
                variant="top"
                src="https://i.postimg.cc/sgFLmxPJ/20210331-081607.jpg"
              />
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <Card>
              <Card.Img
                className="mana-img-teacher"
                variant="top"
                src="https://i.postimg.cc/Bn9H0vWb/20190919043535-IMG-5526.jpg"
              />
            </Card>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
            <Card>
              <Card.Img
                className="mana-img-teacher"
                variant="top"
                src="https://i.postimg.cc/SKm9ntxp/20190919045844-IMG-5532.jpg"
              />
            </Card>
          </div>
        </div>
        <Link to="/ocation1">
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
          fill="##1B2631"
          fill-opacity="1"
          d="M0,64L34.3,85.3C68.6,107,137,149,206,186.7C274.3,224,343,256,411,261.3C480,267,549,245,617,245.3C685.7,245,754,267,823,266.7C891.4,267,960,245,1029,213.3C1097.1,181,1166,139,1234,154.7C1302.9,171,1371,245,1406,282.7L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default JahaninagorHome;
