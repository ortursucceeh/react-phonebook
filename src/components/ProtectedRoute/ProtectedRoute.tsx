import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode | ReactNode[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/login" state={location} />;
};

export default ProtectedRoute;
