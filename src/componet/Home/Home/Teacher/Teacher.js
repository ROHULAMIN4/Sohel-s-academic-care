import React from "react";
import { Card } from "react-bootstrap";
import "./Teacher.css";

const Teacher = ({ teacher }) => {
  const { name, email, info, number, image } = teacher;

  return (
    //    <Col xs={12} md={6} lg={4}>
    <div className="col-lg-3 col-md-3 col-sm-6 shadow-lg  pt-3  container-fluid m-1 rounded teacher-inforamtion">
      <Card>
        <Card.Img
          className="mana-img-teacher"
          variant="top"
          src={`data:image/png;base64,${image}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Card.Text>
            <span className="manage-phn">phone:</span>
            {number}
          </Card.Text>
          <Card.Text className="text-muted">{info}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teacher;
