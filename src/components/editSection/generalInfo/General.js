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
        type="email"
        name="email"
        placeholder="E-post"
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Telefon nummer"
        pattern="[0-9]{4} [0-9]{2} [0-9]{2} [0-9]{2}"
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
