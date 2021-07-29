import React from 'react';

function Cv(props) {
  return (
    <div>
      <p>Here be preview</p>
      <p>{props.resume.email}</p>
    </div>
  );
}

export default Cv;
