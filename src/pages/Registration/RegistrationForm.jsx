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
import './RegistrationForm.scss';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleregister = () => {
    if(!email) {
      alert('please Enter your Email.Id');
      return;
    }

    if(email === "mrksamypc@gmail.com"){
      window.open('/#/admin', '_blank');
      navigate('/');
    } else {
      navigate('/');
    }
  }



  return (
    <div className='maincontainrig'>
    <Container  component="main" maxWidth="xs">
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
          position:"relative",
          bottom:-15,
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
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
          />
          <FormControlLabel
            control={<Checkbox value="acceptTerms" color="primary" />}
            label="I accept all terms & conditions"
          />
          <Button
            type="submit"
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
    </Container>
    </div>
  );
}

export default RegistrationForm;
