import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import aboutside from '../../assets/images/aboutside.jpg';

const AboutPage = () => {

  
  return (
    <Container className='aboutContain' sx={{ width:"100%", flexWrap:"wrap", display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 5, mb:4,  }}>
      <Box sx={{ flex: 1, display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"15px !important"}}>
        <Typography data-aos="fade-right" variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography data-aos="fade-right" variant="body1" sx={{textAlign:"left"}} paragraph>
          The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
        </Typography>
        <Button data-aos="flip-up" className='containedbtn' variant="contained" color="primary">
          Read More
        </Button>
      </Box>
      <Box data-aos="zoom-in-up" sx={{ flex: 1 }}>
        <img src={aboutside} alt="Poolside view" style={{ width: '100%' }} />
      </Box>
    </Container>
  );
};

export default AboutPage;
