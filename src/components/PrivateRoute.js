import { Navigate, Route, Routes } from "react-router-dom";
import { isLogin } from "../Login";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  // return isAuthenticated ? (
  //   <Routes>
  //     <Route {...rest} element={<children />} />
  //   </Routes>
  // ) : (
  //   <Navigate to="/signin" />
  // );

  return(
    <Routes>
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (children) : (<Navigate to="/signin" />)
      }
    />
  </Routes>
  )
};

export default PrivateRoute;
