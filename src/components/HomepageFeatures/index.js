import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Account Setup',
    description: (
      <>Register and login to get access to your Prismora projects.</>
    ),
  },
  {
    title: 'Project Workflow',
    description: (
      <>Create projects, upload resources, analyze inputs, and finish setup.</>
    ),
  },
  {
    title: 'Testing & Integrations',
    description: (
      <>Generate test cases, run tests, view results, and connect tools like GitHub.</>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
