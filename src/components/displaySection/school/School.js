import React from 'react';
import styles from './School.module.css';

function School(props) {
  const { school } = props;

  return (
    <ul className={styles.education}>
      <li className={styles.title}>{school.title}</li>
      <li className={styles.school}>{school.school}</li>
      <li className={styles.year}>
        {school.yearStart} - {school.yearEnd}
      </li>
      <li className={styles.desc}>{school.desc}</li>
    </ul>
  );
}

export default School;
