import React, { useState, useEffect } from 'react';
import styles from '../Edit.module.css';

function Work(props) {
  const { setWork, work, job } = props;

  const [currentWork, setCurrentWork] = useState(job);

  // Update education state, so that it's immediate and not one step behind
  useEffect(() => {
    const updatedworkList = work.filter((item) => job.id !== item.id);
    setWork([...updatedworkList, currentWork]);
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
        className={styles.input}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Jobbtitel"
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

export default Work;
