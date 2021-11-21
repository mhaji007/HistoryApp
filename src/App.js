import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import MyAccount from './components/MyAccount';
import RequireAuth from './components/RequireAuth';
import AuthState from './contexts/auth/AuthState';
import LoginHistoryState from './contexts/loginHistory/LoginHistoryState';

function App() {
  return (
    <Router>
      <AuthState>
        <LoginHistoryState>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/logout"
              element={
                <RequireAuth>
                  <Logout />
                </RequireAuth>
              }
            />
            <Route
              path="/myaccount"
              element={
                <RequireAuth>
                  <MyAccount />
                </RequireAuth>
              }
            />
          </Routes>
        </LoginHistoryState>
      </AuthState>
    </Router>
  );
}

export default App;
