import { render, screen, fireEvent, act } from '@testing-library/react';
import Login from './Login';
import AuthState from '../contexts/auth/AuthState';
import LoginHistoryState from '../contexts/loginHistory/LoginHistoryState';
import { BrowserRouter as Router } from 'react-router-dom';

let component;
beforeEach(() => {
  component = render(
    <AuthState>
      <LoginHistoryState>
        <Router>
          <Login />
        </Router>
      </LoginHistoryState>
    </AuthState>
  );
});
describe('Login component', () => {
  it('should have a username and a password field, also a submit button', () => {
    const { getByTestId } = component;
    const usernameField = getByTestId('username-field');
    const passwordField = getByTestId('password-field');
    const submitButton = getByTestId('login-button');

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
