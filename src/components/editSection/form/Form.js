import React from 'react';
import uniqid from 'uniqid';
import General from '../generalInfo/General';
import Work from '../work/Work';
import Education from '../education/Education';

function Form(props) {
  const { setGeneral, setWork, education, setEducation } = props;

  const ed = education.map((item) => (
    // console.log(item);
    <Education
      setEducation={setEducation}
      school={item}
      education={education}
    />
  ));

  const handleAdd = (e) => {
    e.preventDefault();
    setEducation((prev) => [...prev, { id: uniqid() }]);
  };

  return (
    <div>
      <p>Here be form</p>
      <General setGeneral={setGeneral} />
      <Work setWork={setWork} />
      <div>
        {ed}
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
