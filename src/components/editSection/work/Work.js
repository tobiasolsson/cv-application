import React, { useState, useEffect } from 'react';
import styles from '../Edit.module.css';

function Work(props) {
  const { setWork, work, job } = props;

  const [currentWork, setCurrentWork] = useState(job);

  // Update state, so that it's immediate and not one step behind
  useEffect(() => {
    const updatedworkList = work.map((item) => {
      if (job.id === item.id) {
        return currentWork;
      }
      return item;
    });
    setWork([...updatedworkList]);
  }, [currentWork]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentWork((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    if (work.length > 1) {
      const updatedWorkList = work.filter((item) => job.id !== item.id);
      setWork(updatedWorkList);
    }
  };

  return (
    <form className={styles.main}>
      <input
        type="text"
        name="company"
        placeholder="Arbetsgivare"
        value={job.company}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Jobbtitel"
        value={job.title}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearStart"
        placeholder="Från"
        value={job.yearStart}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearEnd"
        placeholder="Till"
        value={job.yearEnd}
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="Beskrivning"
        value={job.desc}
        className={styles.input}
        onChange={handleChange}
      />
      <button type="button" className={styles.remove} onClick={handleDelete}>
        Ta bort
      </button>
    </form>
  );
}

export default Work;
