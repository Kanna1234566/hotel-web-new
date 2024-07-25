import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './HomePage.scss';
import serviceone from '../../assets/images/serviceone.jpg';
import servicetwo from '../../assets/images/servicetwo.jpg';
import servicethree from '../../assets/images/servicethree.jpg';
import servicefour from '../../assets/images/servicefour.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  { id: 1, name: 'Room Booking', description: 'Book the best rooms with ease.', image: serviceone },
  { id: 2, name: 'Spa Services', description: 'Relax with our premium spa services.', image: servicetwo },
  { id: 3, name: 'Dining', description: 'Enjoy gourmet meals at our restaurants.', image: servicethree },
  { id: 4, name: 'Event Hosting', description: 'Host events in our spacious venues.', image: servicefour },
];

const OurService = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className="service-container">
      <Typography variant="h4" className="title">Our Services</Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Card data-aos="fade-up" className="service-card" style={{ backgroundImage: `url(${service.image})` }}>
              <CardContent className="card-content" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Typography variant="h6" className="service-name">
                  {service.name}
                </Typography>
                <Typography variant="body2" className="service-description">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurService;
