import { Navigate, Outlet } from "react-router-dom";
import Parse from "parse";

const GuestGuard = () => {
  const currentUser = Parse.User.current();

  if (currentUser) {
    return <Navigate to="/" replace />; 
  }

  return <Outlet />; 
};

export default GuestGuard;
