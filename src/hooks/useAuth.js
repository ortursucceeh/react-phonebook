import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, name, isLoading } = useSelector(state => state.user);

  return {
    isAuthenticated: email,
    name,
    email,
    token,
    isLoading,
  };
}
