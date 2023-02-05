import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  let loggedin = false;
  const token = localStorage.getItem('user');
  if(token){
      const user = jwtDecode(token)
      loggedin = true;
  }
  return loggedin;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;