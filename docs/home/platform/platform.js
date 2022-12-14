import React from 'react';
import styles from './platform.module.css';
import Feature from '../../../src/components/Feature';
import Grid from '../../../src/components/Grid';

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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid gap="2rem" minWidth="250px">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </Grid>
    </section>
  );
}