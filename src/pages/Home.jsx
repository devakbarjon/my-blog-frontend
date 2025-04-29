// src/pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <header className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Akbar</span>
          </h1>
          <p className="header-subtitle">BACKEND WEB DEVELOPER</p>
          <a href="https://devakbar.blog/blog" className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">Visit my Blog</a>
          <a href="https://devakbar.blog/portfolio" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit my Works</a>
        </div>
      </header>
    </Layout>
  );
};

export default Home;