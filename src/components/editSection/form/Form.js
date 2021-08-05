import React from 'react';
import General from '../generalInfo/General';
import Work from '../work/Work';
import Education from '../education/Education';
import { schoolObj } from '../../../boiler';

import styles from './Form.module.css';

function Form(props) {
  const { setGeneral, setWork, education, setEducation } = props;

  const ed = education.map((item) => (
    // console.log(item);
    <Education
      key={item.id}
      setEducation={setEducation}
      school={item}
      education={education}
    />
  ));

  const handleAdd = (e) => {
    e.preventDefault();
    setEducation((prev) => [...prev, schoolObj()]);
  };

  return (
    <div>
      <h2>Fill in your resume here:</h2>
      <General setGeneral={setGeneral} />
      <Work setWork={setWork} />
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
