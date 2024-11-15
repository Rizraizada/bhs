import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaBook, FaLightbulb } from 'react-icons/fa';
import styles from './index.module.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Our Values');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Our Values':
        return (
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Academic Excellence</h3>
              <p>Committed to providing the highest standard of education and fostering intellectual growth in every student.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Character Development</h3>
              <p>Building strong moral values and ethical principles in our students to shape responsible citizens.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌟</div>
              <h3>Innovation</h3>
              <p>Embracing modern teaching methods while maintaining our rich traditional values.</p>
            </div>
          </div>
        );
      case 'Mission':
        return (
          <div className={styles.missionContent}>
            <div className={styles.missionImage}>
              <img src="/mison.png" alt="School Mission" />
            </div>
            <div className={styles.missionText}>
              <h3>Empowering Future Leaders</h3>
              <p>At Bharasar High School, our mission is to:</p>
              <ul>
                <li>Provide quality education accessible to all</li>
                <li>Foster critical thinking and creativity</li>
                <li>Build character and leadership skills</li>
                <li>Promote cultural values and traditions</li>
                <li>Create a supportive learning environment</li>
              </ul>
            </div>
          </div>
        );
      case 'Our Vision':
        return (
          <div className={styles.visionContent}>
            <div className={styles.visionStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>1960</span>
                <span className={styles.statLabel}>Established</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Students</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Teachers</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>90%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
            <p className={styles.visionText}>
              Our vision is to be a center of excellence in education, nurturing young minds to become future leaders and responsible citizens of our society.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.headerSection}>
        <h1 className={styles.subtitle}>
          <br />
          Bharasar High School
        </h1>
        <p className={styles.tagline}>Building Tomorrow's Leaders Today</p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'Our Values' ? styles.active : ''}`}
              onClick={() => handleTabClick('Our Values')}
            >
              <FaGraduationCap className={styles.icon} /> Our Values
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'Mission' ? styles.active : ''}`}
              onClick={() => handleTabClick('Mission')}
            >
              <FaBook className={styles.icon} /> Mission
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'Our Vision' ? styles.active : ''}`}
              onClick={() => handleTabClick('Our Vision')}
            >
              <FaLightbulb className={styles.icon} /> Our Vision
            </button>
          </div>

          <div className={`${styles.content} ${styles.fadeIn}`}>
            {renderTabContent()}
          </div>
        </div>

        <div className={styles.schoolInfo}>
          <div className={styles.principalSection}>
            <div className={styles.principalImage}>
              <img src="/api/placeholder/150/150" alt="Principal" className={styles.principalPhoto} />
            </div>
            <h3>[Md.Monirul Islam]</h3>
            <p className={styles.designation}>Headmaster</p>
            <p className={styles.principalMessage}>
              "Education is not just about academic excellence, but about creating well-rounded individuals who can contribute positively to society."
            </p>
          </div>
          <div className={styles.schoolHistory}>
            <h3>Our Legacy</h3>
            <p>
              Established in [Year], Bharasar High School has been a beacon of learning and excellence in education. 
              Our commitment to providing quality education, combined with strong moral values, has helped shape 
              thousands of successful individuals who are making significant contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;