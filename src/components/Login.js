import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import authContext from '../contexts/auth';
import logiinHistoryContext from '../contexts/loginHistory';
import Layout from './Layout';
import { mockUser } from '../constants';
import { useNavigate } from 'react-router';
function Login() {
  const { login } = useContext(authContext);
  const { addHistory } = useContext(logiinHistoryContext);
  const [loginError, setLoginError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const doSubmitForm = (values) => {
    const { username, password } = values;
    const user = mockUser.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      login(user);
      addHistory(user.username, 'login');
      setLoginError('');
      navigate('/');
    } else {
      setLoginError('Invalid username or password, please try again.');
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(doSubmitForm)}
          noValidate
          sx={{ mt: 1 }}
        >
          <FormControl margin="normal" fullWidth>
            <TextField
              native={true}
              margin="normal"
              required
              name="username"
              label="Username"
              id="username"
              type="text"
              {...register('username', {
                required: 'Username is required.',
              })}
              autoFocus
              error={Boolean(errors.username)}
              inputProps={{ 'data-testid': 'username-field' }}
            />

            {errors.username?.message && (
              <FormHelperText
                data-testid="username-error"
                error={Boolean(errors.username)}
              >
                {errors.username.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required.',
              })}
              error={Boolean(errors.password)}
              inputProps={{ 'data-testid': 'password-field' }}
            />
            {errors.password?.message && (
              <FormHelperText
                data-testid="password-error"
                error={Boolean(errors.password)}
              >
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>

          <Button
            name="login"
            data-testid="login-button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          {loginError && <FormHelperText error>{loginError}</FormHelperText>}
        </Box>
      </Box>
    </Layout>
  );
}

export default Login;
