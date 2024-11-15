import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import Dropdiv from "@/components/Dropdiv";

const TabContent = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="contact-tab-content"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const Contact = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Contact",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <style>
        {`
          .contact-container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 2rem;
          }

          .contact-tab-nav {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
          }

          .contact-tab-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.2s;
            background: white;
            border: 2px solid #f3f4f6;
            color: black;
          }

          .contact-tab-button:hover {
            background: #f3f4f6;
          }

          .contact-tab-button.active {
            background: #1a365d;
            color: white;
            border-color: #1a365d;
          }

          .contact-content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .contact-info-panel {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 12px;
            color: black;
          }

          .contact-info-panel h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1a365d;
          }

          .contact-info-panel p {
            margin-bottom: 1rem;
            line-height: 1.6;
          }

          .contact-form-panel {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
          }

          .contact-form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .contact-form-group {
            margin-bottom: 1.5rem;
          }

          .contact-form-group.full-width {
            grid-column: span 2;
          }

          .contact-form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: black;
          }

          .contact-form-group input,
          .contact-form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            transition: border-color 0.2s;
            color: black;
            background: white;
          }

          .contact-form-group input:focus,
          .contact-form-group textarea:focus {
            border-color: #1a365d;
            outline: none;
          }

          .contact-submit-button {
            width: 100%;
            padding: 0.75rem;
            background: #1a365d;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.2s;
            grid-column: span 2;
          }

          .contact-submit-button:hover {
            background: #2d4a7f;
            transform: translateY(-1px);
          }

          .contact-map {
            border-radius: 12px;
            overflow: hidden;
            height: 400px;
            border: 1px solid #e5e7eb;
          }

          .contact-map iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          @media (max-width: 768px) {
            .contact-content-grid {
              grid-template-columns: 1fr;
            }
            
            .contact-form-grid {
              grid-template-columns: 1fr;
            }
            
            .contact-form-group.full-width {
              grid-column: span 1;
            }
            
            .contact-submit-button {
              grid-column: span 1;
            }
          }
        `}
      </style>

      <Dropdiv />

      <div className="contact-container">
        <div className="contact-tab-nav">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`contact-tab-button ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        <div className="contact-content-grid">
          <div className="contact-info-panel">
            <h3>Get in Touch</h3>
            <p>
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
            <p>
              Our dedicated team ensures prompt responses and exceptional service. Feel free to reach out through the form or visit us at our location.
            </p>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form-grid">
              <div className="contact-form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
              <button type="submit" className="contact-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7305.139772819494!2d90.41937300000001!3d23.727049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a791402f1%3A0x3f37af29f5e572d2!2sCity%20General%20Insurance%20Co.%20Ltd.!5e0!3m2!1sen!2sbd!4v1729665516773!5m2!1sen!2sbd"
            title="Location Map"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;