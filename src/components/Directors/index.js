// src/components/Directors.js
import React, { useState } from 'react';
import styles from './index.module.css';
import BASE_URL from '../config/apiConfig';

const Directors = ({ directors }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.directorsSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Introduce Our<br />Honourable Directors</h1>
          <p className={styles.description}>
            Employees need to realize the importance of working well with their teammates when coming into a new job or an existing one. A team player is more valuable.
          </p>
        </div>

        {/* Directors Grid */}
        <div className={styles.directorsGrid}>
          {directors.map((director) => (
            <div key={director.id} className={styles.directorCard}>
              {/* Blue Top Border */}
              <div className={styles.topBorder}></div>
              
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <img
                  src={`${BASE_URL}${director.image_url}`}
                  alt={director.name}
                  className={styles.directorImage}
                />
              </div>

              {/* Content Container */}
              <div className={styles.contentContainer}>
                <h3 className={styles.directorName}>{director.name}</h3>
                <p className={styles.directorTitle}>{director.position}</p>
                <div className={`${styles.directorDescription} ${
                  expandedId === director.id ? styles.expanded : styles.collapsed
                }`}>
                  <p className={styles.directorDetails}>
                    {director.details}
                  </p>
                </div>
                {(!expandedId || expandedId !== director.id) && (
                  <button
                    onClick={() => toggleExpand(director.id)}
                    className={styles.readMoreBtn}
                  >
                    Read more...
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directors;
