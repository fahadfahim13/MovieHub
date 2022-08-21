import React from 'react';
import { Layout } from 'antd';
import logo from 'media/images/logo.png';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/routes/constants';
import SearchMovieComponent from 'components/SearchMovieComponent';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.PATHS.ROOT, { replace: true });
  }

  return (
    <Layout.Header className={styles.headerStyle}>
      <img className={styles.headerLogo} src={logo} alt='Movies' onClick={goToHome} /> 
      <p className={styles.headerText} onClick={goToHome}> MOVIES </p>
      {location.pathname === ROUTES.PATHS.LISTS && <SearchMovieComponent />}
    </Layout.Header>
  );
};

export default Header;
