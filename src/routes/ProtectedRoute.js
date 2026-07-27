import { Navigate, useLocation } from "react-router-dom";
import { useLoginRegister } from "../context";

const ProtectedRoute = ({ children }) => {
  const { token } = useLoginRegister();
  const location = useLocation();

  //console.log("token", token);

  //token = JSON.parse(sessionStorage.getItem("token"));
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default ProtectedRoute;
