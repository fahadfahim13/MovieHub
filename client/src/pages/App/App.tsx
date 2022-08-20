import React from 'react';
import { Layout, BackTop } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'shared/routes/constants';

import Home from 'uicontainers/Home/Home';
import Content from 'uicontainers/layout/Content';
import Footer from 'uicontainers/layout/Footer';
import Header from 'uicontainers/layout/Header';
import { ArrowUp } from '@styled-icons/bootstrap';
import styles from './App.module.css';

const App = () => {
  return (
    <Layout>

      <Header />
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Layout>
        <Content>
          <BackTop >
          <ArrowUp className={styles.backTopButton} />
          </BackTop>
          <Routes>
            <Route path={ROUTES.PATHS.ROOT} element={<Home />} />
            <Route path={ROUTES.PATHS.HOME} element={<Home />} />
          </Routes>
        </Content>
        </Layout>
      </Layout>
        <Footer />
    </Layout>
  );
};

export default App;
