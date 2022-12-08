import React from 'react';
import styles from './Feature.module.css';

export default function Feature({ image, title, description, url, learnText = false }) {
  return (
    <a href={url} className={styles.featureLink}>
      <div className={styles.featureBox}>
        <div className={styles.featureImage}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.featureText}>
          <h2>{title}</h2>
          {description && (
            <p>{description}</p>
          )}
          {learnText && (
            <p className={styles.featureLearnText}>Learn more &rarr;</p>
          )}
        </div>
      </div>
    </a>
  );
}