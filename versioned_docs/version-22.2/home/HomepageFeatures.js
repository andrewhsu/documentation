import React from 'react';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Redpanda Platform',
    image: require('../../../static/img/panda.png').default,
    url: '../home/platform/',
  },
  {
    title: 'Redpanda Cloud',
    image: require('../../../static/img/cloud.png').default,
    url: '../home/cloud/',
  },
];

function Feature({image, title, description, url}) {
  return (
    <div className={styles.padding}>
      <div className={styles.border}>
          <div className="text--center">
            <a href={url}>
            <img src={image} className={styles.featureSvg} alt={title} />
            </a>
          </div>
        <div className="text--center ">
          <a href={url}>
            <h3 className={styles.body_title}>
              {title}
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
    </section>
  );
}