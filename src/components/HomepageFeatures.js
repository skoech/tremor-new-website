import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Connectivity',
    link: 'community/getting-started/connectivity/',
    Svg: require('/img/connectivity.svg').default,
    description: (
      <>
        Connecting different systems is an integral part of Tremor.

        Tremor connects to the external systems using connectors.
      </>
    ),
  },
  {
    title: 'Tooling',
    link: 'community/getting-started/tooling/',
    Svg: require('/img/tooling.svg').default,
    description: (
      <>
        Tooling is a first class concern for Tremor. From the very beginning, effort went into making errors and warnings

        informative, and not leaving users with stack traces, or cryptic output; developer and operator friendliness- good user experience-

        are front and centre.
      </>
    ),
  },
  {
    title: 'Customisation',
    link: 'community/getting-started/specialize/',
    Svg: require('/img/customisation.svg').default,
    description: (
      <>
        Operators specialise Tremor pipelines, thus allowing for highly custom behaviour.
      </>
    ),
  },
  {
    title: 'Scripting',
    link: 'community/getting-started/scripting/',
    Svg: require('/img/scripting.svg').default,
    description: (
      <>
        Tremor's application logic is scriptable. Tremor supports data processing through a directed acyclic graph-based pipeline

        or workflow. Pipelines can be configured via a YAML syntax or via a structured query language.

        Both the query and scripting language are evolving as Tremor is applied to broader production use cases.
      </>
    ),
  },
  {
    title: 'Codecs',
    link: 'community/getting-started/codecs/',
    Svg: require('/img/codecs.svg').default,
    description: (
      <>
        Tremor connects to the external systems using connectors - either Onramps or Offramps- which use Codecs

        to transform the external wire form of connected system participants into a structured internal value type Tremor understands semantically.
      </>
    ),
  },
  {
    title: 'Install',
    link: 'community/getting-started/install/',
    Svg: require('/img/install.svg').default,
    description: (
      <>
        Quick developer install.<br />

        But first, <a href="getting-started/getting-started/">set up</a> your Tremor installation.
      </>
    ),
  },
];

function Feature({ Svg, link, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
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
