import { Navigate, Outlet } from "react-router";
import Parse from "parse";

const AuthGuard = () => {
  const currentUser = Parse.User.current(); 

  if (!currentUser) {
    return <Navigate to="/login" replace />; 
  }

  return <Outlet />; 
};

export default AuthGuard;
