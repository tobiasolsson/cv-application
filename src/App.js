import React, { useState } from 'react';
import Form from './components/editSection/form/Form';
import Cv from './components/displaySection/cv/Cv';
import { schoolObj, workObj, generalObj } from './boiler';

// TODO: När Ovasn är klart, fixa CSS

function App() {
  const [general, setGeneral] = useState(generalObj);
  const [work, setWork] = useState(workObj);
  const [education, setEducation] = useState([schoolObj]);

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
