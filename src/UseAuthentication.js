import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import DashBoard from "./components/DashBoard";
import About from "./components/About";
import HomePage from "./components/HomePage";

const UseAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //localStorage.getItem("isAuthenticated") === "true"
   const navigate = useNavigate();
  console.log(isAuthenticated,"check value");

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", true);
    navigate("/dashboard");

    // Login();

  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", false);
  };

  return (
    <div>
      <h1>Welcome User</h1>

      <Link to="/signin">Sign in</Link>

      <Link to="/about">About Us</Link>

      <Link to="/dashboard">Dashboard</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/dashboard" element={<DashBoard />} /> */}
        {/* {/* <Route
          path="/signin"
          exact
          element={
            <PublicRoute>
              <SignIn onLogin={handleLogin}/>
            </PublicRoute>
          }
        /> */}
         <Route
          path="/dashboard"
          element={
            <PrivateRoute Component={DashBoard}>
              
            </PrivateRoute>
          }
        /> 
        <Route
          path="/about"
          element={
            <PublicRoute>
              <About />
            </PublicRoute>
          }
        /> 
      </Routes>
    </div>
  );
};

export default UseAuthentication;
