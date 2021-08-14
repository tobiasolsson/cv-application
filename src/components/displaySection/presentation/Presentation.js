import React from 'react';
import styles from './presentation.module.css';

function Presentation(props) {
  const { general } = props;

  // const renderGeneral = Object.keys(general).map((key) => (
  //   <p>{general[key]}</p>
  // ));

  return (
    <div className={styles.presentation}>
      <div className={styles.header}>
        <h2 className={styles.name}>
          {general.firstName} {general.lastName}
        </h2>
        <h3 className={styles.title}>{general.title}</h3>
      </div>
      <div className={styles.contact}>
        <p>{general.email}</p>
        <p>{general.phone}</p>
      </div>
      <div className={styles.desc}>
        <p>{general.desc}</p>
      </div>
    </div>
  );
}

export default Presentation;
