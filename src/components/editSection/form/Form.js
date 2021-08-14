import React from 'react';
import General from '../generalInfo/General';
import Work from '../work/Work';
import Education from '../education/Education';
import { schoolObj, workObj } from '../../../boiler';

import styles from './Form.module.css';

function Form(props) {
  const { general, setGeneral, setWork, work, education, setEducation } = props;

  const ed = education.map((item) => (
    <Education
      key={item.id}
      setEducation={setEducation}
      school={item}
      education={education}
    />
  ));

  const wk = work.map((item) => (
    <Work key={item.id} setWork={setWork} job={item} work={work} />
  ));

  const handleAddWork = (e) => {
    e.preventDefault();
    setWork((prev) => [...prev, workObj()]);
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    setEducation((prev) => [...prev, schoolObj()]);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Fyll i din information här:</h2>
      <General general={general} setGeneral={setGeneral} />
      <div className={styles.main}>
        <h3 className={styles.title}>Arbetserfarenhet: </h3>
        {wk}
        <button type="submit" className={styles.add} onClick={handleAddWork}>
          Lägg till
        </button>
      </div>
      <div className={styles.main}>
        <h3 className={styles.title}>Utbildning:</h3>
        {ed}
        <button
          type="submit"
          className={styles.add}
          onClick={handleAddEducation}
        >
          Lägg till
        </button>
      </div>
    </div>
  );
}

export default Form;
