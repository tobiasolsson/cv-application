import React from 'react';
import styles from './Work.module.css';

function Work(props) {
  const { work } = props;

  return (
    <ul className={styles.job}>
      <li className={styles.title}>{work.title}</li>
      <li className={styles.company}>{work.company}</li>
      <li className={styles.year}>
        {work.yearStart} - {work.yearEnd}
      </li>
      <li className={styles.desc}>{work.desc}</li>
    </ul>
  );
}

export default Work;
