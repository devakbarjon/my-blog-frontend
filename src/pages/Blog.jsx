// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import config from '../config';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your FastAPI backend
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/posts/`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <section className="section">
        <div className="container text-center">
          <p className="section-subtitle">Recent Posts?</p>
          <h6 className="section-title mb-6">Blog</h6>

          {posts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-header">
                <img 
                  src={post.photo}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} 
                  className="blog-card-img" 
                  alt={post.title} 
                />
              </div>
              <div className="blog-card-body">
                <h5 className="blog-card-title">{post.title}</h5>
                <p className="blog-card-caption">
                  <a href="#">By: Akbar</a>
                  <a href="#"><i className="fas fa-eye"></i> {post.views}</a>
                  <a href="#"><i className="fas fa-heart text-danger"></i> {post.likes}</a>
                  <a href="#"><i className="fas fa-comment"></i> {post.comments.length}</a>
                </p>
                <p>{post.content.substring(0, 40)}...</p>
                <Link to={`posts/${post.id}`} className="blog-card-link">
                  Read more <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;