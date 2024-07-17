
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthRoute;
