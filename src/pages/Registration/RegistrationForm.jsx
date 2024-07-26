import React, { useState } from 'react';
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Link,
  Container,
  CssBaseline,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegistrationForm.scss';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  const [rePassword, setRePassword] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleregister = () => {
    
    if (!userName) {
      toast.error('Please enter your name.');
      return;
    }
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }
    if (!password) {
      toast.error('Please enter your password.');
      return;
    }
    if (!rePassword) {
      toast.error('Please confirm your password.');
      return;
    }
    if (password !== rePassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!acceptTerms) {
      toast.error('You must accept the terms and conditions.');
      return;
    }
    

    if (email === "mrksamypc@gmail.com") {
      toast.success('Welcome Admin!');
      setTimeout(() => {
        window.open('/#/admin', '_blank');
      navigate('/');
      }, 3000);
    
    } else {
      toast.success('Registration successful!');
      setTimeout(() => {
        navigate('/');
      },3000)
      
    }
  };

  return (
    <div className='maincontainrig'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            padding: 3,
            borderRadius: 2,
            bgcolor: '#fff',
            position: "relative",
            bottom: -15,
          }}
        >
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e) => setRePassword(e.target.value)}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
            />
           <FormControlLabel
        control={
          <Checkbox
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            color="primary"
          />
        }
        label="I accept all terms & conditions"
      />
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handleregister}
              sx={{ mt: 3, mb: 2 }}
            >
              Register Now
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?{' '}
              <Link href="#" variant="body2">
                Login now
              </Link>
            </Typography>
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default RegistrationForm;
