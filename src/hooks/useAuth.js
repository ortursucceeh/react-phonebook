import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, name } = useSelector(state => state.user);

  return {
    isAuthenticated: email,
    name,
    email,
    token,
  };
}
