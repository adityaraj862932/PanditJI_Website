import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children }) => {
  const getrole = useSelector((state) => state.auth);
  console.log(getrole.role);
  

  if (!getrole) return <Navigate to="/login" />;  // Redirect to login if not logged in

  if (getrole.role !== 'admin') return <Navigate to="/login" />;  // Redirect if role doesn't match

  return children;
};

export default ProtectedRoute;
