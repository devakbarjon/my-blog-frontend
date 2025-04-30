import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import config from '../config';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${config.apiUrl}/projects`) // Replace with your actual API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Portfolio Page</title>
      </Helmet>
      <section className="section">
        <div className="container text-center">
          <p className="section-subtitle">What I Did ?</p>
          <h6 className="section-title mb-6">Portfolio</h6>
          <div className="row">
            {projects.map(project => (
              <div className="col-md-4" key={project.id}>
                <a href={project.link} className="portfolio-card" target="_blank" rel="noopener noreferrer">
                  <img src={project.photo} className="portfolio-card-img" alt={project.name} />
                  <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                      <h4>{project.name}</h4>
                      <p className="font-weight-normal">{project.description}</p>
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;