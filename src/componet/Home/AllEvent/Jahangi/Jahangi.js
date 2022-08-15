import React from "react";
import { Card } from "react-bootstrap";

const Jahangi = ({ pic }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 shadow-lg  pt-3  container-fluid m-1 rounded teacher-inforamtion">
      <Card>
        <Card.Img className="mana-img-teacher" variant="top" src={pic.img} />
      </Card>
    </div>
  );
};

export default Jahangi;
