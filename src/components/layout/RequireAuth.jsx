import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getSession } from "../../services/authService";

export default function RequireAuth() {
  const location = useLocation();
  const token = getSession()?.token;

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}
