import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Gopalgonj from "../GopalGonjs/Gopalgonj";

const Gopalgonjs = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/picture2022")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <Container className="mt-5">
      <h2 className="event-style">Annual tour 2022</h2>
      <p className="event-style">Tongipara Gopalgonj</p>
      <Row>
        {img.map((pic) => (
          <>
            <Gopalgonj key={pic._id} pic={pic}></Gopalgonj>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default Gopalgonjs;
