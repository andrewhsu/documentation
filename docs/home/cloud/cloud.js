import React from 'react';
import clsx from 'clsx';
import styles from './cloud.module.css';
import Feature from '../../../src/components/Feature';
import Grid from '../../../src/components/Grid';

const FeatureList = [
  {
    title: 'Managed Connectors',
    image: require('../../../static/img/onboard.png').default,
    description: (
      <>
        Export data from topics to external systems using managed connectors.
      </>
    ),
    url: '/docs/cloud/managed-connectors/',
  },
  {
    title: 'Dedicated vs BYOC',
    image: require('../../../static/img/console-icon.png').default,
    description: (
      <>
        Understand the differences between deploying in Redpanda's dedicated cloud and deploying in your own VPC.
      </>
    ),
    url: '/docs/cloud/dedicated-byoc',
  },
  {
    title: 'Create a Dedicated Cluster',
    image: require('../../../static/img/deploy.png').default,
    description: (
      <>
        Deploy a cluster in Redpanda's VPC.
      </>
    ),
    url: '/docs/cloud/create-dedicated-cloud-cluster-aws',
  },
  {
    title: 'Create a BYOC cluster',
    image: require('../../../static/img/multi-cluster.png').default,
    description: (
      <>
        Bring Your Own Cloud (BYOC) and deploy a Redpanda cluster.
      </>
    ),
    url: '/docs/cloud/create-byoc-cluster-aws',
  },
  {
    title: 'VPC Peering',
    image: require('../../../static/img/cloud.png').default,
    description: (
      <>
        Create a networking connection between your VPC and Redpanda's VPC.
      </>
    ),
    url: '/docs/cloud/vpc-peering/',
  },
  {
    title: 'Create a topic',
    image: require('../../../static/img/new-try-now.png').default,
    description: (
      <>
        Create a topic in Redpanda's Cloud. 
      </>
    ),
    url: '/docs/cloud/create-topic/',
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