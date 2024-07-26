import React, { useEffect, useState } from 'react';
import { AppBar, Button, Card, CardContent, Toolbar, Tooltip, Typography } from '@mui/material';
import './Admin.scss';
import { collection, getDocs } from 'firebase/firestore';
import starLogo from '../../assets/images/starLogo.png';
import { db } from '../../components/Homepage/firebase';
import ClearIcon from '@mui/icons-material/Clear';
import DownloadIcon from '@mui/icons-material/Download';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let message = JSON.parse(localStorage.getItem('messages')) || [];
      console.log('LocalStore', message);
      setData(message);

      // Uncomment this to fetch from Firebase
      // const querySnapshot = await getDocs(collection(db, 'messages'));
      // const messages = querySnapshot.docs.map(doc => doc.data());
      // setData(messages);
      // console.log('Firebase', messages);
    };
    fetchData();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Name', 'Email', 'Message']],
      body: data.map(item => [
        item.from_name,
        item.from_email,
        item.message,
      ]),
    });
    doc.save('Booking_Report.pdf');
  };

  const download = index => {
    const doc = new jsPDF();
    const item = data[index];
    autoTable(doc, {
      head: [['Name', 'Email', 'Message']],
      body: [[item.from_name, item.from_email, item.message]],
    });
    doc.save(`${item.from_name}_Booking_Report.pdf`);
  };

  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static" className="headerContain2">
        <Toolbar className="toolbarmi">
          <Typography variant="h6" className="title">
            <img src={starLogo} alt="Star Logo" className="logo" />
          </Typography>
          <Typography style={{ color: 'white' }}>ADMIN DASHBOARD</Typography>
          <div>
            <Tooltip title="Clear All Data">
              <Button
                style={{ marginRight: 16, color: 'black' }}
                onClick={handleClear}
                type="submit"
                className="bgcolor"
              >
                <ClearIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Download All Report">
              <Button
                style={{ marginRight: 46, color: 'black' }}
                onClick={downloadPDF}
                type="submit"
                className="bgcolor2"
              >
                <DownloadIcon />
              </Button>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>

      <div style={styles.container}>
        <div style={styles.contain}>
          {data.map((item, index) => (
            <Card key={index} style={styles.card}>
              <CardContent>
                <Typography variant="h6">Name: {item.from_name}</Typography>
                <Typography color="textSecondary">Email: {item.from_email}</Typography>
                <Typography>Message: {item.message}</Typography>
              </CardContent>
              <Button onClick={() => download(index)}> <DownloadIcon /></Button>
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
    backgroundColor: '#f0f0f0', 
  },
  contain: {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    overflowY: 'auto', 
  },
  card: {
    minWidth: 275,
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
};

export default Admin;
