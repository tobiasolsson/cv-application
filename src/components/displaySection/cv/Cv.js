import React from 'react';

function Cv(props) {
  const { general, education, work } = props;

  const renderGeneral = Object.keys(general).map((key) => (
    <p>{general[key]}</p>
  ));

  const renderEudcation = education.map((item) => {
    const noIdItem = Object.keys(item).filter((key) => key !== 'id');
    const ed = noIdItem.map((key) => (
      <li>
        {key} - {item[key]}
      </li>
    ));
    return <ul>{ed}</ul>;
  });

  const renderWork = work.map((item) => {
    const noIdItem = Object.keys(item).filter((key) => key !== 'id');
    const wk = noIdItem.map((key) => (
      <li>
        {key} - {item[key]}
      </li>
    ));
    return <ul>{wk}</ul>;
  });

  return (
    <div>
      <p>Here be preview</p>
      <div>{renderGeneral}</div>
      <div>{renderWork}</div>
      <div>{renderEudcation}</div>
    </div>
  );
}

export default Cv;
