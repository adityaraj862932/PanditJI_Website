import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" />;  // Redirect to login if not logged in

  if (role && user.role !== role) return <Navigate to="/" />;  // Redirect if role doesn't match

  return children;
};

export default ProtectedRoute;
