import React from 'react';

import Presentation from '../presentation/Presentation';
import Work from '../work/Work';
import School from '../school/School';

import styles from './Cv.module.css';

function Cv(props) {
  const { general, education, work } = props;

  const renderEudcation = education.map((item) => (
    <School key={item.id} school={item} />
  ));
  const renderWork = work.map((item) => <Work key={item.id} work={item} />);

  return (
    <div>
      <div className={styles.general}>
        <Presentation general={general} />
      </div>
      <div>
        <h3 className={styles.category}>Arbetserfarenhet</h3>
        {renderWork}
      </div>
      <div>
        <h3 className={styles.category}>Utbildning</h3> {renderEudcation}
      </div>
    </div>
  );
}

export default Cv;
