import { Navigate } from "react-router-dom";
import { useToken } from "./UserTokenContext";

function ProtectRoutes({ children }) {
  const { token } = useToken();

  if (!token) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectRoutes;
