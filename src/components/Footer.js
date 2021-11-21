import { Container, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Container>
      <Typography
        textAlign="center"
        variant="body2"
        color="textSecondary"
        align="center"
      >
        Copyright &copy;
      </Typography>
    </Container>
  );
}

export default Footer;
