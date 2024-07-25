import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Button } from '@mui/material';
import './HomePage.scss';
import firstimg from '../../assets/images/firstimg.jpg';
import secondimg from '../../assets/images/secondimg.jpg';
import thirdimg from '../../assets/images/thiredimg.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const items = [
  {
    new: "New Arrivals",
    image: firstimg,
    alt: 'First slide',
    text: 'Welcome to Our Hotel',
    description: 'Experience the best hospitality with us. Enjoy luxurious rooms, exceptional dining, and unparalleled service.',
  },
  {
    new: "New Arrivals",
    image: secondimg,
    alt: 'Second slide',
    text: 'Experience Luxury',
    description: 'Indulge in our world-class amenities. Relax at our spa, savor gourmet cuisine, and unwind in opulent comfort.',
  },
  {
    new: "New Arrivals",
    image: thirdimg,
    alt: 'Third slide',
    text: 'Relax and Enjoy',
    description: 'Unwind in our serene environment. Stroll through beautiful gardens and enjoy a peaceful escape.',
  },
];

const Homeport = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const navigate = useNavigate();

  const handleGo = () => {
    navigate("/registrationform")
  }

  return (
    <Carousel className="carousel">
      {items.map((item, index) => (
        <Paper key={index} elevation={0} className="carouselItem">
          <div className="imageContainer">
            <img src={item.image} alt={item.alt} className="sliderImage" />
            <div className="overlay">
              <Typography data-aos="flip-down" variant="h4" className="overlayText">
                {item.text}
              </Typography>
              <Typography data-aos="fade-down" variant="body1" className="descriptionText">
                {item.description}
              </Typography>
              <Button onClick={handleGo} variant="contained" color="primary" className="bookingButton">
                Book Now
              </Button>
              <Typography variant="h4" className="overlaydesgn">
                {item.new}
              </Typography>
            </div>
          </div>
          <div>
          
          </div>
        </Paper>
      ))}
    </Carousel>
  );
};

export default Homeport;
