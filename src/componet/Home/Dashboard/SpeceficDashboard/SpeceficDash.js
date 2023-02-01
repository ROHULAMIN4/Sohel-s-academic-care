import React from "react";
import { Card } from "react-bootstrap";

const SpeceficDash = ({ stu }) => {
  const { Address, Name, email, phone } = stu;

  return (
    <div className="col-lg-3 col-md-3 col-sm-6 shadow-lg  pt-3  container-fluid m-1 rounded teacher-inforamtion">
      <Card>
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>Name: {Name}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>Email: {email}</Card.Text>
          <Card.Text style={{ textAlign: "left" }}>
            Class: {stu.class}
          </Card.Text>
          <Card.Text style={{ textAlign: "left" }}>
            <span className="manage-phn">phone:</span>
            {phone}{" "}
          </Card.Text>

          <Card.Text style={{ textAlign: "left" }} className="text-muted">
            Address: {Address}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SpeceficDash;
