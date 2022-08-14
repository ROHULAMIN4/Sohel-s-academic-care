import logo from "./logo.svg";
import "./App.css";
import Home from "./componet/Home/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./componet/Home/Navigation/Navigation";
import Login from "./componet/Home/Login/Login";
import Resiger from "./componet/Home/NewUser/NewUser";
import Authprovider from "./context/Authprovider/Authprovider";

import PrivateRoute from "./componet/Home/Login/PrivateRoute/PrivateRoute";
import DashboardHome from "./componet/Home/Dashboard/DashboardHome/DashboardHome";
import Event from "./componet/Home/Event/Event";

import About from "./componet/Home/About/About";
import IconBar from "./componet/Home/IconBar/IconBar";
import StudentDashbord from "./componet/Home/StudentDashbord/StudentDashbord";
import ParentDashbord from "./componet/Home/Dashboard/ParentDashbord/ParentDashbord";
import ManageReslt from "./componet/Home/Dashboard/ManageResult/ManageResult";
import ManageImage from "./componet/Home/Dashboard/ManageImage/ManageImage";
import Inforamtion from "./componet/Home/Dashboard/Information/Inforamtion";
import Teacher from "./componet/Home/Dashboard/Teacher/Teacher";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Navigation></Navigation>
        <IconBar></IconBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Resiger />} />
          <Route path="/about" element={<About></About>} />
          <Route
            path="/dashbordStudent"
            element={<StudentDashbord></StudentDashbord>}
          />
          <Route
            path="dashbord"
            element={
              <PrivateRoute>
                <ParentDashbord />
              </PrivateRoute>
            }
          >
            {/*  */}
            <Route index element={<DashboardHome />} />
            <Route path="manageresult" element={<ManageReslt />} />
            <Route path="manageiamges" element={<ManageImage />} />
            <Route path="inforamtion" element={<Inforamtion />} />
            <Route path="teacher-info" element={<Teacher />} />
          </Route>

          <Route
            path="/event"
            element={
              <PrivateRoute>
                <Event></Event>
              </PrivateRoute>
            }
          />
          <Route
            path="/result"
            element={
              <PrivateRoute>
                <ManageReslt></ManageReslt>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
