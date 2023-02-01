import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Event2019 from "../Event2019/Event2019";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Event.css";
import { Link } from "react-router-dom";

const Events2019 = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch("https://sohels-server.vercel.app/picture")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fill-opacity="1"
          d="M0,0L26.7,37.3C53.3,75,107,149,160,202.7C213.3,256,267,288,320,256C373.3,224,427,128,480,90.7C533.3,53,587,75,640,96C693.3,117,747,139,800,133.3C853.3,128,907,96,960,101.3C1013.3,107,1067,149,1120,165.3C1173.3,181,1227,171,1280,149.3C1333.3,128,1387,96,1413,80L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <h2 className="event-style">Annual tour 2019</h2>
        <p className="event-style">
          Jahanginagor university and Jatiyo Sriti Shoudho
        </p>
        <Row>
          {img
            .map((pic) => <Event2019 key={pic._id} pic={pic}></Event2019>)
            .slice(0, 3)}
        </Row>
        {/*  */}
        <Link to="/ocation2">
          <Button>
            See more{" "}
            <FontAwesomeIcon
              style={{
                textAlign: "center",
                color: "#3498DB",
                padding: "10px 5px",
                fontWeight: "800",
                fontSize: "1.5rem",
              }}
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Events2019;
