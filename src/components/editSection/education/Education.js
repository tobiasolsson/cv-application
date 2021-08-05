import React, { useState, useEffect } from 'react';
import styles from '../Edit.module.css';

function Education(props) {
  const { setEducation, education, school } = props;

  const [currentSchool, setCurrentSchool] = useState(school);

  // Update education state, so that it's immediate and not one step behind
  useEffect(() => {
    const updatedEducationList = education.filter(
      (item) => school.id !== item.id,
    );
    setEducation([...updatedEducationList, currentSchool]);
  }, [currentSchool]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentSchool((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    if (education.length > 1) {
      const updatedEducationList = education.filter(
        (item) => school.id !== item.id,
      );
      setEducation(updatedEducationList);
    }
  };

  return (
    <form className={styles.main}>
      <input
        type="text"
        name="school"
        placeholder="Skola"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Program"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearStart"
        placeholder="Från"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearEnd"
        placeholder="Till"
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="Beskrivning"
        className={styles.input}
        onChange={handleChange}
      />
      <button type="button" onClick={handleDelete}>
        Remove
      </button>
    </form>
  );
}

export default Education;
