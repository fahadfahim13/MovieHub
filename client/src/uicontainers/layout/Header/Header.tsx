import React from 'react';
import { Layout } from 'antd';
import logo from 'media/images/logo.png';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <Layout.Header className={styles.headerStyle}>
      <img className={styles.headerLogo} src={logo} alt='Movies' /> 
      <p className={styles.headerText}> MOVIES </p>
    </Layout.Header>
    );
};

export default Header;
