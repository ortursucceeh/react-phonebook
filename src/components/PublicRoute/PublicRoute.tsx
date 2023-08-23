import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode | ReactNode[];
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();
  return !isAuthenticated ? children : <Navigate to="/home" state={location} />;
};

export default PublicRoute;
