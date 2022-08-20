import React from 'react';
import { Layout } from 'antd';
import logo from 'media/images/logo.png';
import { TextField } from '@mui/material';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <Layout.Header className={styles.headerStyle}>
      <img className={styles.headerLogo} src={logo} alt='Movies' /> 
      <p className={styles.headerText}> MOVIES </p>
      <TextField className={styles.searchInput} id="outlined-basic" placeholder='Search title' variant="outlined" onChange={(e) => console.log(e.target.value)}></TextField>
    </Layout.Header>
    );
};

export default Header;
