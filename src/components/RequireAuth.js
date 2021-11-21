import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import authContext from '../contexts/auth';

function RequireAuth({ children }) {
  const { isLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    debugger;
    if (!isLoggedIn) {
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [isLoggedIn, navigate, location]);

  return isLoggedIn ? children : null;
}

export default RequireAuth;
