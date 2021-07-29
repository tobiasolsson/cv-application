import React from 'react';

function Work(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setWork((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form>
      <label>
        Företag:
        <input type="text" name="company" onChange={handleChange} />
      </label>
      <label>
        Titel:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Från:
        <input type="text" name="yearStart" onChange={handleChange} />
      </label>
      <label>
        Till:
        <input type="text" name="yearEnd" onChange={handleChange} />
      </label>
      <label>
        Beskrivning:
        <input type="text" name="desc" onChange={handleChange} />
      </label>
    </form>
  );
}

export default Work;
