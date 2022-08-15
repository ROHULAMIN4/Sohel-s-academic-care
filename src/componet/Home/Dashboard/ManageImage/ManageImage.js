import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageImage = () => {
  const [pic, setPic] = useState("");
  const picInfo = {
    img: pic,
  };

  const handleOnSubmit = (e) => {
    fetch("http://localhost:5000/picture", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(picInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully !",
            showConfirmButton: true,
          });
        }
      });

    e.preventDefault();
  };
  const handleOnSubmit2020 = (e) => {
    fetch("http://localhost:5000/picture2020", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(picInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully !",
            showConfirmButton: true,
          });
        }
      });

    e.preventDefault();
  };
  const handleOnSubmit2022 = (e) => {
    fetch("http://localhost:5000/picture2022", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(picInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully !",
            showConfirmButton: true,
          });
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-center mt-4">Put a link here event 2019</h3>
      <form onSubmit={handleOnSubmit}>
        <TextField
          style={{
            marginTop: "15px",

            textAlign: "center",

            width: "75%",
          }}
          label="Give img link in 2019 event"
          type="text"
          placeholder="enter img link in 2019 event"
          onBlur={(e) => setPic(e.target.value)}
          variant="outlined"
          required
        />
        <Button
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            width: "75%",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
      {/*  2020 event */}

      <form onSubmit={handleOnSubmit2020}>
        <TextField
          style={{
            marginTop: "15px",

            textAlign: "center",

            width: "75%",
          }}
          label="Give img link in 2020 event"
          type="text"
          placeholder="enter img link in 2020 event"
          onBlur={(e) => setPic(e.target.value)}
          variant="outlined"
          required
        />
        <Button
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            width: "75%",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
      {/* 2022 event */}
      <form onSubmit={handleOnSubmit2022}>
        <TextField
          style={{
            marginTop: "15px",

            textAlign: "center",

            width: "75%",
          }}
          label="Give img link in 2022 event"
          type="text"
          placeholder="enter img link in 2022 event"
          onBlur={(e) => setPic(e.target.value)}
          variant="outlined"
          required
        />
        <Button
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            width: "75%",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ManageImage;
