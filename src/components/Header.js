import { AccountCircle } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../contexts/auth/';

function Header() {
  const { isLoggedIn, user } = useContext(authContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {isLoggedIn && user ? (
          <>
            <Button color="inherit" component={Link} to="/myaccount">
              My Account
            </Button>
            <Button
              aria-controls="basic-menu"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              startIcon={<AccountCircle />}
            >
              <Typography variant="body1" component="div">
                {user.username}
              </Typography>
            </Button>
            <Menu
              MenuListProps={{
                'aria-labelledby': 'user-button',
              }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                color="inherit"
                onClick={handleClose}
                component={Link}
                to="/logout"
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
