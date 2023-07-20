import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();

  const location = useLocation();
  return !isAuthenticated ? children : <Navigate to="/home" state={location} />;
}

export default PublicRoute;
