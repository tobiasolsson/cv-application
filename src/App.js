import React, { useState } from 'react';
import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';

function App() {
  const [resume, setResume] = useState({
    // General info
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    desc: '',
    // Work XP
    // Education
  });
  return (
    <div>
      <p>CV Application</p>
      <Form setResume={setResume} />
      <Cv resume={resume} />
    </div>
  );
}

export default App;
