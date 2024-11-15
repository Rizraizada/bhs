import { useState, useEffect } from 'react';
import styles from './index.module.css';
import BASE_URL from '../config/apiConfig';

export default function NewsSection() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`${BASE_URL}/api/news/news`);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    fetchNews();
  }, []);
  
  const featuredNews = news.slice(0, 1);
  const otherNews = news.slice(1);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.subtitle}>Latest Updates</h2>
        <h1 className={styles.title}>News & Highlights</h1>
        <div className={styles.titleUnderline}></div>
      </header>

      <div className={styles.newsGrid}>
        <section className={`${styles.featuredNews} ${styles.fadeIn}`}>
          {featuredNews.map((item) => (
            <div key={item.id} className={styles.featuredNewsItem}>
              <div className={styles.featuredImageContainer}>
                <img src={item.image} alt={item.title} className={styles.featuredImage} />
                <span className={styles.featuredBadge}>Featured</span>
              </div>
              <div className={styles.featuredContent}>
                <h3 className={styles.featuredTitle}>{item.title}</h3>
                <p className={styles.featuredDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <aside className={styles.newsList}>
          {otherNews.map((item, index) => (
            <div key={item.id} className={`${styles.newsItem} ${styles.slideIn}`}>
              <div className={`${styles.newsIcon} ${styles[`icon-${index % 3}`]}`}></div>
              <div className={styles.newsContent}>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.newsDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
