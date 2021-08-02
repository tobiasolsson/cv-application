import React, { useState } from 'react';
import uniqid from 'uniqid';

function Education(props) {
  const { setEducation, education, school } = props;

  const [currentSchool, setCurrentSchool] = useState({
    school: '',
    title: '',
    yearStart: 0,
    yearEnd: 0,
    desc: '',
    id: uniqid(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentSchool((prev) => ({ ...prev, [name]: value }));
    const updatedEducationList = education.filter(
      (item) => school.id !== item.id,
    );
    setEducation([...updatedEducationList, currentSchool]);
  };

  const handleDelete = () => {
    const updatedEducationList = education.filter(
      (item) => school.id !== item.id,
    );
    setEducation(updatedEducationList);
  };

  return (
    <form>
      <label>
        Skola:
        <input type="text" name="school" onChange={handleChange} />
      </label>
      <label>
        Titel:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Från:
        <input type="text" name="yearStart" onChange={handleChange} />
      </label>
      <label>
        Till:
        <input type="text" name="yearEnd" onChange={handleChange} />
      </label>
      <label>
        Beskrivning:
        <input type="text" name="desc" onChange={handleChange} />
      </label>
      <button type="button" onClick={handleDelete}>
        Remove
      </button>
    </form>
  );
}

export default Education;
