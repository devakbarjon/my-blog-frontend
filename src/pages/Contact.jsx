// src/pages/Contact.jsx
import React from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import config from '../config';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const formRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
  
    try {
      const response = await fetch(`${config.apiUrl}/contact/`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        toast.error('Failed to send message');
        console.error('Error:', data.detail);
        return;
      }
  
      toast.success(data.message || 'Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <section className="section">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="contact-form col-md-10 col-lg-8 m-auto"
          >
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group col-sm-12">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Write Something"
                  rows={6}
                  required
                />
              </div>
              <div className="form-group col-sm-12 mt-3">
                <button 
                  type="submit" 
                  className="btn btn-outline-primary rounded"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;