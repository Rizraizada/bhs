import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <h2 className={styles.schoolName}>Bharasar High School</h2>
          <p className={styles.slogan}>
            Nurturing Minds, Building Futures<br />
            Excellence in Education Since [Establishment Year]
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Twitter">📧</a>
            <a href="#" aria-label="Instagram">📞</a>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/academic-calendar">Academic Calendar</a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/facilities">School Facilities</a></li>
            <li><a href="/achievements">Achievements</a></li>
          </ul>
        </div>
        <div className={styles.officialInfo}>
          <h3>Contact Us</h3>
          <p>
            <span className={styles.icon}>📍</span> Bharasar, [District]<br />
            [Full Address]<br />
            <br />
            <span className={styles.icon}>📞</span> [Phone Number]
          </p>
          <h4>School Hours:</h4>
          <p>
            Monday - Friday: 8:00 AM - 4:00 PM<br />
            Saturday: 8:00 AM - 1:00 PM
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {currentYear} Bharasar High School. All rights reserved.</p>
        <p className={styles.motto}>"Knowledge is Power"</p>
      </div>
      {showScroll && (
        <button className={styles.scrollTopButton} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;