import React from 'react';
import General from '../generalInfo/General';
import Work from '../work/Work';
import Education from '../education/Education';
import { schoolObj } from '../../../boiler';

import styles from './Form.module.css';

function Form(props) {
  const { setGeneral, setWork, work, education, setEducation } = props;

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

  const handleAdd = (e) => {
    e.preventDefault();
    setEducation((prev) => [...prev, schoolObj()]);
  };

  return (
    <div>
      <h2>Fill in your resume here:</h2>
      <General setGeneral={setGeneral} />
      <div>
        <h3>Arbetserfarenhet: </h3>
        {wk}
      </div>
      <div className={styles.education}>
        <h3>Utbildning:</h3>
        {ed}
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
