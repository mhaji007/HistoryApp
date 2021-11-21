import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from './Home';
import AuthState from '../contexts/auth/AuthState';
import LoginHistoryState from '../contexts/loginHistory/LoginHistoryState';
import { BrowserRouter as Router } from 'react-router-dom';

let component;
beforeEach(() => {
  component = render(
    <AuthState>
      <LoginHistoryState>
        <Router>
          <Home />
        </Router>
      </LoginHistoryState>
    </AuthState>
  );
});
describe('Home component', () => {
  it('should should display Welcome Home!', () => {
    const { getByText } = component;

    expect(getByText('Welcome Home!')).toBeInTheDocument();
  });
});
