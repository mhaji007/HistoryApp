import { useEffect, useContext } from 'react';
import authContext from '../contexts/auth/';
import loginHistoryContext from '../contexts/loginHistory';

function Logout() {
  const { user, logout } = useContext(authContext);
  const { addHistory } = useContext(loginHistoryContext);
  useEffect(() => {
    addHistory(user.username, 'logout');
    logout();
  }, [user, addHistory, logout]);
  return null;
}

export default Logout;
