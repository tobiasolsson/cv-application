import React, { useState, useEffect } from 'react';
import styles from '../Edit.module.css';

function Education(props) {
  const { setEducation, education, school } = props;

  const [currentSchool, setCurrentSchool] = useState(school);

  // Update state, so that it's immediate and not one step behind
  useEffect(() => {
    const updatedEducationList = education.map((item) => {
      if (school.id === item.id) {
        return currentSchool;
      }
      return item;
    });
    setEducation([...updatedEducationList]);
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
        value={school.school}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Program"
        value={school.title}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearStart"
        placeholder="Från"
        value={school.yearStart}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearEnd"
        placeholder="Till"
        value={school.yearEnd}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="Beskrivning"
        value={school.desc}
        className={styles.input}
        onChange={handleChange}
      />
      <button type="button" className={styles.remove} onClick={handleDelete}>
        Remove
      </button>
    </form>
  );
}

export default Education;
