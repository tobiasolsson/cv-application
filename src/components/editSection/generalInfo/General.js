import React from 'react';

function General(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setGeneral((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form>
      <label>
        Förnamn:
        <input type="text" name="firstName" onChange={handleChange} />
      </label>
      <label>
        Efternamn:
        <input type="text" name="lastName" onChange={handleChange} />
      </label>
      <label>
        Jobbtitel:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Mail:
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label>
        Telefon:
        <input type="text" name="phone" onChange={handleChange} />
      </label>
      <label>
        Introduktion:
        <input type="text" name="desc" onChange={handleChange} />
      </label>
    </form>
  );
}

export default General;
