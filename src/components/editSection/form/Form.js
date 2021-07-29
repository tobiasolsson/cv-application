import React from 'react';
import General from '../generalInfo/General';

function Form(props) {
  return (
    <div>
      <p>Here be form</p>
      <General setResume={props.setResume} />
    </div>
  );
}

export default Form;
