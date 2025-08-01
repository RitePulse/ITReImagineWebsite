import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Using Formspree for form handling
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    fetch('https://formspree.io/f/mgvzzqkk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow-x: hidden;
        }

        .contact-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 30px;
          position: relative;
          z-index: 1;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-title {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(40px, 8vw, 80px);
          line-height: 1.1;
          margin: 0 0 20px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .contact-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-family: "Inter", sans-serif;
          font-size: 18px;
          line-height: 1.6;
          margin: 0 0 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(120, 119, 198, 0.2);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .contact-info h3 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px;
          margin: 0 0 30px;
          font-weight: 600;
        }

        .contact-item {
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: white;
          flex-shrink: 0;
        }

        .contact-details h4 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          margin: 0 0 5px;
          font-weight: 600;
        }

        .contact-details p {
          color: rgba(255, 255, 255, 0.7);
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
        }

        .consultation-btn {
          margin-top: 30px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          text-decoration: none;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
          display: inline-block;
          text-align: center;
        }

        .consultation-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(120, 119, 198, 0.2);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .contact-form h3 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px;
          margin: 0 0 30px;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group label {
          display: block;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(120, 119, 198, 0.5);
          background: rgba(255, 255, 255, 0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          border: none;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .back-btn {
          position: fixed;
          top: 30px;
          left: 30px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-decoration: none;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        @media screen and (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .contact-container {
            padding: 60px 20px;
          }

          .contact-form,
          .contact-info {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="contact-page">
        <a href="/" className="back-btn">← Back to Home</a>
        
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your digital transformation goals.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>hello@itreimagine.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>Coming Soon</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Office</h4>
                  <p>Coming Soon</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <a href="https://calendly.com/ritepulse/it-reimagine-free-consultation" className="consultation-btn" target="_blank" rel="noopener noreferrer">
                📅 Book Free Consultation
              </a>
            </div>

            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="digital-transformation">Digital Transformation Solutions</option>
                    <option value="ai-solutions">AI-Powered Business Solutions</option>
                    <option value="automation">Intelligent Automation & Development</option>
                    <option value="strategy">Digital Strategy & Implementation</option>
                    <option value="custom-development">Custom AI & Software Development</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project and how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;