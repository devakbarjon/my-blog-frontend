// src/pages/About.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <section className="section pt-0">
        <div className="container text-center">
          <div className="about">
            <div className="about-img-holder">
              <img src="/static/imgs/man.png" className="about-img" alt="about" />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                I'm a backend web developer who loves building fast and reliable applications.
                I specialize in Python, and I’ve worked with different databases and frameworks.
                My goal is to create systems that work well and make things easier for users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;