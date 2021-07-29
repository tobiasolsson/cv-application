import React, { useState } from 'react';
import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';

function App() {
  const [general, setGeneral] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    desc: '',
  });
  const [work, setWork] = useState([
    {
      yearStart: 0,
      yearEnd: 0,
      company: '',
      desc: '',
      title: '',
    },
  ]);
  const [education, setEducation] = useState([
    {
      yearStart: 0,
      yearEnd: 0,
      school: '',
      desc: '',
      title: '',
    },
  ]);

  return (
    <div>
      <p>CV Application</p>
      <Form
        setGeneral={setGeneral}
        setWork={setWork}
        setEducation={setEducation}
      />
      <Cv general={general} work={work} education={education} />
    </div>
  );
}

export default App;
