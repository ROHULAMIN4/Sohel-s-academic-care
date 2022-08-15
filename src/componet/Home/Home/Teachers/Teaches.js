import React, { useState } from "react";
import { useEffect } from "react";
import Teacher from "../Teacher/Teacher";
import { Row, Container } from "react-bootstrap";

const Teaches = () => {
  const [teachers, SetTeahers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teacher")
      .then((res) => res.json())
      .then((data) => SetTeahers(data));
  }, []);
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,288L48,293.3C96,299,192,309,288,293.3C384,277,480,235,576,218.7C672,203,768,213,864,197.3C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/*  */}
      <h4 className="text-center fs-4 text-primary bold">Teachers community</h4>
      <Container>
        <Row>
          <div style={{ textAlign: "center" }} className="row">
            {teachers.map((teacher) => (
              <Teacher key={teacher._id} teacher={teacher}></Teacher>
            ))}
          </div>
        </Row>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,160L26.7,138.7C53.3,117,107,75,160,90.7C213.3,107,267,181,320,176C373.3,171,427,85,480,74.7C533.3,64,587,128,640,144C693.3,160,747,128,800,101.3C853.3,75,907,53,960,53.3C1013.3,53,1067,75,1120,96C1173.3,117,1227,139,1280,149.3C1333.3,160,1387,160,1413,160L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Teaches;
