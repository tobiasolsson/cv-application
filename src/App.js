import React, { useState } from 'react';

import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';
import { schoolObj, workObj, generalObj } from './boiler';

import styles from './App.module.css';

// TODO: fixa CSS
// TODO: Lägg till header och footer med text/länkar för att fylla ut topp och botten
// TODO: Flytta preview till botten när skärmen minskar
// TODO: Fina till mobile css

function App() {
  const [general, setGeneral] = useState(generalObj);
  const [work, setWork] = useState([workObj()]);
  const [education, setEducation] = useState([schoolObj()]);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>CV Application</h1>
      <div className={styles.content}>
        <Form
          setGeneral={setGeneral}
          setWork={setWork}
          work={work}
          setEducation={setEducation}
          education={education}
        />
        <Cv general={general} work={work} education={education} />
      </div>
    </div>
  );
}

export default App;
