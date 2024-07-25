import React from 'react';
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm" className='footerContain' >
        <Typography variant="body1">
          My Company Address: 123 Main Street, City, Country
        </Typography>
        <Box sx={{ mt: 1 }}>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Twitter />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <Instagram />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://yourwebsite.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
