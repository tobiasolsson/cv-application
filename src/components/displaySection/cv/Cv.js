import React from 'react';

function Cv(props) {
  const { general, education } = props;

  const renderGeneral = Object.keys(general).map((key) => (
    <p>{general[key]}</p>
  ));

  const renderEudcation = education.map((item) => {
    const ed = Object.keys(item).map((key) => (
      <li>
        {key} - {item[key]}
      </li>
    ));
    return <ul>{ed}</ul>;
  });

  return (
    <div>
      <p>Here be preview</p>
      <div>{renderGeneral}</div>
      <div>{renderEudcation}</div>
    </div>
  );
}

export default Cv;
