import React from 'react';
import styles from '../Edit.module.css';

function General(props) {
  const { general, setGeneral } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className={styles.main}>
      <input
        type="text"
        name="firstName"
        placeholder="Förnamn"
        value={general.firstName}
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Efternamn"
        value={general.lastName}
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="text"
        name="title"
        placeholder="Jobbtitel"
        value={general.title}
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="E-post"
        value={general.email}
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Telefon nummer"
        value={general.phone}
        pattern="[0-9]{4} [0-9]{2} [0-9]{2} [0-9]{2}"
        className={styles.input}
        onChange={handleChange}
      />

      <input
        type="text"
        name="desc"
        placeholder="Beskriving"
        value={general.desc}
        className={styles.input}
        onChange={handleChange}
      />
    </form>
  );
}

export default General;
