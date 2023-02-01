import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Jahangi from "../Jahangi/Jahangi";

const Jhanginagors = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch("https://sohels-server.vercel.app/picture2020")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <Container>
      <h2 className="event-style">Annual tour 2020</h2>
      <p className="event-style">Sonargaon and Panam nagor</p>
      <Row>
        {img.map((pic) => (
          <Jahangi key={pic._id} pic={pic}></Jahangi>
        ))}
      </Row>
    </Container>
  );
};

export default Jhanginagors;
