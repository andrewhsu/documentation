import React from 'react';
import clsx from 'clsx';
import styles from './platform.module.css';

const FeatureList = [
  {
    title: 'Get Started with Redpanda',
    image: require('../../../static/img/quickstart.png').default,
    description: (
      <>
        Try out Redpanda.
      </>
    ),
    url: '/docs/platform/quickstart/',
  },
  {
    title: 'Deploying for Production',
    image: require('../../../static/img/deployment.png').default,
    description: (
      <>
        Install and configure Redpanda.
      </>
    ),
    url: '/docs/platform/deployment/production-deployment',
  },
  {
    title: 'Redpanda Console',
    image: require('../../../static/img/console-docs.png').default,
    description: (
      <>
        Use the Redpanda Console dashboard to administer clusters and get visibility into your data streams.
      </>
    ),
    url: '/docs/platform/quickstart/console-installation',
  },
  {
    title: 'rpk Command Reference',
    image: require('../../../static/img/RPK-commands.png').default,
    description: (
      <>
        Browse all commands for running Redpanda.
      </>
    ),
    url: '/docs/platform/reference/rpk',
  },
  {
    title: 'Tiered Storage',
    image: require('../../../static/img/try-now.png').default,
    description: (
      <>
        Save storage costs by offloading log segments to the cloud.
      </>
    ),
    url: '/docs/platform/data-management/tiered-storage',
  },
  {
    title: 'Sizing Guidelines',
    image: require('../../../static/img/get-started.png').default,
    description: (
      <>
        Size your production clusters to maximize performance.
      </>
    ),
    url: 'https://redpanda.com/blog/sizing-redpanda-cluster-best-practices',
  },
];

function Feature({image, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.padding}>
      <div className={styles.border}>
          <div className="text--center">
            <a href={url}>
            <img src={image} className={styles.featureSvg} alt={title} />
            </a>
          </div>
        <div className={styles.box}>
          <div className="text--left padding-horiz--md">
            <a href={url}>
            <span className={styles.body_title}>{title}</span>
            </a>
            <div className={styles.body_text}>
              {description}

            </div>
            <div className={styles.learn}>
                <a href={url}><p>Learn more -> </p></a>
              </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div class={clsx('border border-primary')}>
      <div className="container">
        <div className={styles.customGrid}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        </div>
    </section>
  );
}