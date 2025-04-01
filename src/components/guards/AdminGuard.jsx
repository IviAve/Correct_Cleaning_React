import { Navigate, Outlet } from "react-router-dom";
import Parse from "parse";

const AdminGuard = () => {
  const currentUser = Parse.User.current();

  if (!currentUser || !currentUser.get("isAdmin")) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminGuard;
