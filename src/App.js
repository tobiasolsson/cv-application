import React, { useState } from 'react';

import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';
import { schoolObj, workObj, generalObj } from './boiler';

import styles from './App.module.css';

// TODO: Textarea på description inputs

function App() {
  const [general, setGeneral] = useState(generalObj);
  const [work, setWork] = useState([workObj()]);
  const [education, setEducation] = useState([schoolObj()]);

  return (
    <div className={styles.main}>
      <header>
        <h1 className={styles.title}>CV Applikation</h1>
      </header>
      <div className={styles.content}>
        <Form
          general={general}
          setGeneral={setGeneral}
          setWork={setWork}
          work={work}
          setEducation={setEducation}
          education={education}
        />
        <Cv general={general} work={work} education={education} />
      </div>
      <footer>
        Tobias Olsson |{' '}
        <a
          href="https://github.com/tobiasolsson/cv-application"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
