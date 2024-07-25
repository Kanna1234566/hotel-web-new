import React, { useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './HomePage.scss';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const blogPosts = [
    {
      image: blog1 ,
      title: 'Luxury Poolside Rooms',
      subtitle: 'Relax and Unwind',
      description: 'Experience the ultimate relaxation in our luxurious poolside rooms, featuring stunning views and top-notch amenities.',
   },
    {
      image: blog2,
      title: 'Elegant Suites',
      subtitle: 'Comfort and Style',
      description: 'Our elegant suites offer a perfect blend of comfort and style, equipped with all modern conveniences for your stay.',
    },
    {
      image: blog3,
      title: 'Gourmet Dining',
      subtitle: 'A Culinary Journey',
      description: 'Indulge in a culinary journey with our gourmet dining options, featuring world-class chefs and exquisite dishes crafted from the finest ingredients.',
    },
  ];

  return (
    <div className='mainBlog'>
      <Typography className='bloghead' variant="h4" component="h2" gutterBottom>
        Blog
      </Typography>
      <Grid className='gridPad' container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card data-aos="zoom-in">
              <CardMedia
                component="img"
                alt={post.title}
                height="140"
                image={post.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
