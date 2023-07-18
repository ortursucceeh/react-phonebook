import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, name, isLoading } = useSelector(state => state.auth);

  return {
    isAuthenticated: email,
    name,
    email,
    token,
    isLoading,
  };
}
