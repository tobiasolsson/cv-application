import React from 'react';
import General from '../generalInfo/General';
import Work from '../work/Work';
import Education from '../education/Education';

function Form(props) {
  const { setGeneral, setWork, education, setEducation } = props;

  const e = education.map((item) => (
    // console.log(item);
    <Education
      setEducation={setEducation}
      school={item}
      education={education}
    />
  ));

  return (
    <div>
      <p>Here be form</p>
      <General setGeneral={setGeneral} />
      <Work setWork={setWork} />
      {e}
    </div>
  );
}

export default Form;
