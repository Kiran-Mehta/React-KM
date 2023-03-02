import { Navigate, Route, Routes } from "react-router-dom";
import  { isLogin } from "../Login";

const PublicRoute = ({children , ...rest }) => {
  // const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          !isLogin() ? (children) : (<Navigate to="/signin" />)
        }
      />
    </Routes>
  );

  // isAuthenticated ? (
  //   <Navigate to="/dashboard" />
  // ) : (
  //   <Routes>
  //     <Route {...rest} element={<children />} />
  //   </Routes>
  // );
};

export default PublicRoute;
