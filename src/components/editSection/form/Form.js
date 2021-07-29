import React from 'react';
import General from '../generalInfo/General';
import Work from '../work/Work';
import Education from '../education/Education';

function Form(props) {
  const { setGeneral, setWork, setEducation } = props;
  return (
    <div>
      <p>Here be form</p>
      <General setGeneral={setGeneral} />
      <Work setWork={setWork} />
      <Education setEducation={setEducation} />
    </div>
  );
}

export default Form;
