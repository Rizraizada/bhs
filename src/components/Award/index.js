import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './index.module.css';
import BASE_URL from '../config/apiConfig';

const AwardPresentation = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/award/awards`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCarouselItems(data);
      } catch (error) {
        console.error("Error fetching awards:", error);
      }
    };

    fetchAwards();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className={styles['award-presentation']}>
      {/* Left side text */}
      <div className={styles['award-text']}>
        <div className={styles['school-badge']}>
          <span className={styles['badge-icon']}>🏆</span>
          <span className={styles['badge-text']}>Excellence in Education</span>
        </div>
        <h2 className={styles['award-title']}>
          Celebrating Our Academic Excellence
        </h2>
        <p className={styles['award-description']}>
          Nurturing talents, fostering innovation, and recognizing outstanding achievements 
          across academics, sports, and extra-curricular activities.
        </p>
      </div>

      {/* Centered medal image */}
      <div className={styles['award-medal']}>
        <div className={styles['medal-container']}>
          <img src="/award-medal.png" alt="School Excellence Medal" />
          <div className={styles['medal-glow']}></div>
        </div>
      </div>

      {/* Right side image carousel */}
      <div className={styles['award-carousel']}>
        {carouselItems.length > 0 && carouselItems[currentIndex] ? (
          <div className={styles['carousel-item']}>
            <div className={styles['image-container']}>
              <img
                src={`${BASE_URL}${carouselItems[currentIndex].image}`}
                alt="Award ceremony"
                className={styles['carousel-image']}
              />
              <div className={styles['image-overlay']}></div>
            </div>
            <div className={styles['carousel-text']}>
              <div className={styles['carousel-logo']}>
                <span className={styles['school-initial']}>SE</span>
                <span className={styles['school-name']}>SCHOOL OF EXCELLENCE</span>
              </div>
              <div className={styles['carousel-award']}>
                <p className={styles['award-name']}>{carouselItems[currentIndex].title}</p>
                <p className={styles['award-detail']}>{carouselItems[currentIndex].subtitle}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles['loading']}>Loading awards...</div>
        )}

        {/* Carousel controls */}
        <div className={styles['carousel-controls']}>
          <button
            className={`${styles['carousel-control']} ${styles['carousel-control-left']}`}
            onClick={handlePrev}
            disabled={carouselItems.length === 0}
          >
            <ChevronLeft />
          </button>
          <button
            className={`${styles['carousel-control']} ${styles['carousel-control-right']}`}
            onClick={handleNext}
            disabled={carouselItems.length === 0}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardPresentation;