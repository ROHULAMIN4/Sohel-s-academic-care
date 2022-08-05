import logo from "./logo.svg";
import "./App.css";
import Home from "./componet/Home/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./componet/Home/Navigation/Navigation";
import Login from "./componet/Home/Login/Login";
import Resiger from "./componet/Home/NewUser/NewUser";
import Authprovider from "./context/Authprovider/Authprovider";
import Teacher from "./componet/Home/Teacher/Teacher";
import PrivateRoute from "./componet/Home/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Resiger />} />
          <Route
            path="/Teacher"
            element={
              <PrivateRoute>
                <Teacher />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
