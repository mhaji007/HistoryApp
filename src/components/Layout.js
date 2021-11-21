import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, CssBaseline, Box } from '@mui/material';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Box
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Box as="header" mb={2}>
          <Header />
        </Box>
        <Box flex={1} as="main" my={2}>
          <Container style={{ height: '100%' }}>{children}</Container>
        </Box>
        <Box as="footer" mb={2}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
