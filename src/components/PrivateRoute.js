import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { isLogin } from "../Login";

const PrivateRoute = ({ children:Children, Component, ...rest }) => {
  console.log(Children, "child data goes here");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  return(
         <>
         {
          true? (<Component/>): (<Navigate to = "/signin" />)
         }
         </>
  )
};

export default PrivateRoute;
