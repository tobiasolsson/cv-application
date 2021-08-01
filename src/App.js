import React, { useState } from 'react';
import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';

// använd uniqeid lib som förra projektet
// scrappa schools, med uniqe id editera skola och jobb.

function App() {
  const [general, setGeneral] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    desc: '',
  });
  const [work, setWork] = useState({
    yearStart: 0,
    yearEnd: 0,
    company: '',
    desc: '',
    title: '',
  });
  // const [workHistory, setworkHistory] = useState([]);
  const [education, setEducation] = useState([
    {
      school: '',
      title: '',
      yearStart: 0,
      yearEnd: 0,
      desc: '',
      id: 'init',
    },
  ]);

  return (
    <div>
      <p>CV Application</p>
      <Form
        setGeneral={setGeneral}
        setWork={setWork}
        setEducation={setEducation}
        education={education}
      />
      <Cv general={general} work={work} education={education} />
    </div>
  );
}

export default App;
