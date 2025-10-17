import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function AuthGuard({ children }) {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
