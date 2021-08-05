import React from 'react';
import styles from '../Edit.module.css';

function General(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setGeneral((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className={styles.main}>
      <input
        type="text"
        name="firstName"
        placeholder="Förnamn"
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Efternamn"
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
        name="email"
        placeholder="E-post"
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Telefon nummer"
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="text"
        name="desc"
        placeholder="Beskriving"
        className={styles.input}
        onChange={handleChange}
      />
    </form>
  );
}

export default General;
