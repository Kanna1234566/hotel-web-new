import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './HomePage.scss';
import starLogo from '../../assets/images/starLogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ scrollToSection, refs }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <AppBar position="static" className="headerContain">
      <Toolbar>
        <Typography data-aos="fade-down-right" variant="h6" className="title">
          <img src={starLogo} alt="Star Logo" className="logo" />
          Hotel
        </Typography>
        <Typography
          data-aos="fade-down-left"
          className="menuItem"
          onClick={() => scrollToSection(refs.homeRef)}
        >
          HOME
        </Typography>
      
        <Typography
          data-aos="fade-down-left"
          className="menuItem"
          onClick={() => scrollToSection(refs.serviceRef)}
        >
          OUR ROOM
        </Typography>
        <Typography
          data-aos="fade-down-left"
          className="menuItem"
          onClick={() => scrollToSection(refs.aboutRef)}
        >
          ABOUT
        </Typography>
        <Typography
          data-aos="fade-down-left"
          className="menuItem"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          CONTACT US
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
