import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';

// TODO: Minimera boilerplate för setEducation
// TODO: Varför är Cv 1 tecken bakom state? useEffect? Fel i Education.js?
// TODO: När Ovasn är klart, fixa CSS

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
      id: uniqid(),
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
