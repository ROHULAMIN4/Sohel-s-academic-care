import logo from "./logo.svg";
import "./App.css";
import Home from "./componet/Home/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./componet/Home/Navigation/Navigation";
import Login from "./componet/Home/Login/Login";
import Resiger from "./componet/Home/NewUser/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Resiger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
