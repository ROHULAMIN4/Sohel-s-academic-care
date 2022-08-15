import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Teacher.css";

const Teacher = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    // for submitting base 64 images
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    formData.append("info", info);
    formData.append("number", number);
    // feching data to server

    fetch("http://localhost:5000/teacher", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully !",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="teacher-main-div">
      <form onSubmit={handleOnSubmit}>
        <TextField
          className="custom-inforamtion"
          label="name"
          type="text"
          onBlur={(e) => setName(e.target.value)}
          variant="standard"
          required
        />
        <br />
        <TextField
          className="custom-inforamtion"
          label="email"
          onBlur={(e) => setEmail(e.target.value)}
          type="email"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          className="custom-inforamtion"
          label="Phone Number"
          onBlur={(e) => setNumber(e.target.value)}
          type="number"
          variant="standard"
          required
        />
        <br />
        <TextField
          className="custom-inforamtion"
          label="Studyinformation"
          onBlur={(e) => setInfo(e.target.value)}
          type="text"
          variant="standard"
          required
        />
        <br />
        <br />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          type="file"
          className="custom-inforamtion"
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
