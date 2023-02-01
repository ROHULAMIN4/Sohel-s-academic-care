import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SpeceficDash from "../SpeceficDashboard/SpeceficDash";

const DashboardHome = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    fetch("https://sohels-server.vercel.app/student1")
      .then((res) => res.json())
      .then((res) => setStudent(res));
  });
  return (
    <>
      <div>
        <h1 className="text-center mt-5">Totall Student {student.length}</h1>
      </div>
      <Row>
        <div style={{ textAlign: "center" }} className="row">
          {student.map((stu) => (
            <SpeceficDash key={stu._id} stu={stu}>
              <SpeceficDash />
            </SpeceficDash>
          ))}
        </div>
      </Row>
    </>
  );
};

export default DashboardHome;
