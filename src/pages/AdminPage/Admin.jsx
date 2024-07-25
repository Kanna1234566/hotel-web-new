import React, { useEffect, useState } from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography } from '@mui/material';
import './Admin.scss';
import { collection, getDocs } from 'firebase/firestore';
import starLogo from '../../assets/images/starLogo.png';
import { db } from '../../components/Homepage/firebase';

const Admin = () => {

  const [data, setData] = useState([
    {
      username: "kumar",
      email: "kumar@gmail.com",
      message: "i want Hotel room"
    },
    {
      username: "kumar",
      email: "kumar@gmail.com",
      message: "i want Hotel room"
    },
    {
      username: "kumar",
      email: "kumar@gmail.com",
      message: "i want Hotel room"
    },
    {
      username: "kumar",
      email: "kumar@gmail.com",
      message: "i want Hotel room"
    },

    {
      username: "kumar",
      email: "kumar@gmail.com",
      message: "i want Hotel room"
    },
    {
      username: "kumar",
      email: "kumar@gmail.com",
      message: "i want Hotel room"
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const messages = querySnapshot.docs.map(doc => doc.data());
      setData(messages);
      console.log("data", data);
    };
    fetchData();
  }, []);


  return (
    <>  
    <AppBar position="static" className="headerContain2">
      <Toolbar className='toolbarmi'>
        <Typography variant="h6" className="title">
          <img src={starLogo} alt="Star Logo" className="logo" />
        </Typography>

        <Typography style={{ marginRight: 46, color: "white" }} >DashBoard</Typography>
      </Toolbar>
    </AppBar>

      <div style={styles.container}>
        <div style={styles.contain}>
        {data.map((item, index) => (
          <Card key={index} style={styles.card}>
            <CardContent>
              <Typography variant="h6">{item.username}</Typography>
              <Typography color="textSecondary">{item.email}</Typography>
              <Typography>{item.message}</Typography>
            </CardContent>
          </Card>
        ))}
        
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
      display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
  },
  contain: {
    marginTop:'60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    overFlow:'scroll'
  },
  card: {
    minWidth: 275,
  },
};

export default Admin;
