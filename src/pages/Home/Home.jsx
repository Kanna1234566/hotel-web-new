import { useRef, useEffect } from "react";
import AboutPage from "../../components/Homepage/AboutPage";
import Blog from "../../components/Homepage/Blog";
import ContactForm from "../../components/Homepage/ContactForm";
import Footer from "../../components/Homepage/Footer";
import Header from "../../components/Homepage/Header";
import Homepart from "../../components/Homepage/Homepart";
import OurService from "../../components/Homepage/OurService";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, serviceRef, blogRef, contactRef }} />
      <div ref={homeRef}><Homepart /></div>
      <div ref={serviceRef}><OurService /></div>
      <div ref={blogRef}><Blog /></div>
      <div ref={aboutRef}><AboutPage /></div>
      <div ref={contactRef}><ContactForm /></div>
      <Footer />
    </>
  );
};

export default Home;
