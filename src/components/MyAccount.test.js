import { render, screen, fireEvent, act } from '@testing-library/react';
import MyAccount from './MyAccount';
import AuthState from '../contexts/auth/AuthState';
import LoginHistoryState from '../contexts/loginHistory/LoginHistoryState';
import { BrowserRouter as Router } from 'react-router-dom';

let component;
beforeEach(() => {
  component = render(
    <AuthState>
      <LoginHistoryState>
        <Router>
          <MyAccount />
        </Router>
      </LoginHistoryState>
    </AuthState>
  );
});
describe('MyAccount component', () => {
  it('should display no history initially', () => {
    const { getByText } = component;

    expect(getByText('No login/logout history available')).toBeInTheDocument();
  });
});
