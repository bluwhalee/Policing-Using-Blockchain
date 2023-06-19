import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  let userType = localStorage.getItem('user');
  userType = jwtDecode(userType).userType;
  return userType==4;
};

const protectOprDash = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default protectOprDash;