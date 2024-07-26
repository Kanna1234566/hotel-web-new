
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const StyledButton = styled(Button)({
  color:"black",
  borderRadius: 0,
  backgroundColor: 'white',
  padding: '15px 27px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'red',
    color:"white"
  },
  float:"right"
});

const ContactArea = styled(Box)({
  padding: '60px 0',
  textAlign: 'center',
});

const SingleAddress = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  paddingLeft: '40px',
  '@media (max-width:768px)': {
    paddingLeft: '0px',
  },
  '& svg': {
    backgroundColor: '#f6f6f6',
    color: 'black',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    padding: '8px',
    marginRight: '14px',
    boxShadow: '0 5px 30px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    '&:hover': {
      backgroundColor: 'red',
      color: '#fff',
    },
  },
});

const ContactForm = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_71f18mk', 'template_5sa20p4', form.current, {
        publicKey: '2R05UE3EQkpAwSPWJ',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
        },
        (error) => {
          toast.error('Failed to send email: ' + error.text);
        },
      );
  };


  const [inputs, setInputs] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    

    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    console.log("dada", messages);
    // Add the new message to the array
    messages.push(inputs);
    
    // Save the updated array back to local storage
    localStorage.setItem('messages', JSON.stringify(messages));

    console.log("send", inputs)
    try {
      await addDoc(collection(db, 'messages'), inputs);
      console.log("success");
      navigate('/admin');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  return (
    <div className='bgimgconatct'>
    <ContactArea className='contactmain'>
      <Typography className='headconatct' variant="h1" gutterBottom>
        Contact Us
      </Typography>
   
      <Grid  container spacing={4} justifyContent="center">
        <Grid className='disflx' item xs={12} md={7}>
          <form method="post" ref={form} onSubmit={sendEmail} action="contact.php">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField className='nameinput' onChange={handleChange} name="from_name"  fullWidth label="Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField className='nameinput' onChange={handleChange} type="email" name="from_email" fullWidth label="Email" variant="outlined" required />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField className='nameinput' fullWidth label="Subject" variant="outlined" required />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  onChange={handleChange}
                  className='nameinput'
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={6}
                  required
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <StyledButton onClick={handleSubmit} type="submit">
                  Send Message
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid className='disflx' item xs={12} md={5}>
          <SingleAddress>
            <LocationOnIcon />
            <Box>
              <Typography variant="h6">Our Address</Typography>
              <Typography>3481 Melrose Place, Beverly Hills</Typography>
            </Box>
          </SingleAddress>
          <SingleAddress>
            <EmailIcon />
            <Box>
              <Typography variant="h6">Send your message</Typography>
              <Typography>Info@example.com</Typography>
            </Box>
          </SingleAddress>
          <SingleAddress>
            <PhoneIcon />
            <Box>
              <Typography variant="h6">Call us on</Typography>
              <Typography>(+1) 517 397 7100</Typography>
            </Box>
          </SingleAddress>
          <SingleAddress>
            <AccessTimeIcon />
            <Box>
              <Typography variant="h6">Work Time</Typography>
              <Typography>
               All time working
              </Typography>
            </Box>
          </SingleAddress>
        </Grid>
      </Grid>
    </ContactArea>
    <ToastContainer />
    </div>
  );
};

export default ContactForm;
