import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Teacher.css";

const Teacher = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleOnSubmit = (e) => {
    fetch("https://sohels-server.vercel.app/teacher", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Success!",
            "Information submitted successfully.",
            "success"
          );
        } else {
          Swal.fire("error!", "something went wrong", "erroe");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="teacher-main-div">
      <form onSubmit={handleOnSubmit}>
        <TextField
          className="custom-inforamtion"
          label="name"
          type="text"
          name="name"
          onBlur={handleOnBlur}
          variant="standard"
          required
        />
        <br />
        <TextField
          className="custom-inforamtion"
          label="email"
          name="email"
          onBlur={handleOnBlur}
          type="email"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          className="custom-inforamtion"
          label="Phone Number"
          name="phone"
          onBlur={handleOnBlur}
          type="number"
          variant="standard"
          required
        />
        <br />
        <TextField
          className="custom-inforamtion"
          label="Studyinformation"
          name="info"
          onBlur={handleOnBlur}
          type="text"
          variant="standard"
          required
        />
        <br />
        <br />
        <TextField
          className="custom-inforamtion"
          label="Image"
          name="img"
          onBlur={handleOnBlur}
          type="text"
          variant="standard"
          required
        />
        <br />
        <br />
        <Button
          className="custom-inforamtion"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Teacher;
