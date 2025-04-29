// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Layout = ({ children }) => {
  useSmoothScroll();
  
  return (
    <>
      {}
      <Navbar />
      <main>{children}</main>
      <Footer />
      
      {}
    </>
  );
};

export default Layout;