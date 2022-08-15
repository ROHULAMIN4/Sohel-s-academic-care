import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllEvents2019 from "../../Home/AllEvents2019/AllEvents2019";

const Sunargaons = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/picture")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <Container className="mt-5">
      <h2 className="event-style">Annual tour 2019</h2>
      <p className="event-style">
        Jahanginagor university and Jatiyo Sriti Shoudho
      </p>
      <Row>
        {img.map((pic) => (
          <>
            <AllEvents2019 key={pic._id} pic={pic}></AllEvents2019>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default Sunargaons;
