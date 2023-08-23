import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
  const { email, token, name, isLoading } = useAppSelector(state => {
    console.log('state', state);
    return state.auth;
  });

  return {
    isAuthenticated: email,
    name,
    email,
    token,
    isLoading,
  };
};
