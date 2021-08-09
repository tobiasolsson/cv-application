import uniqid from 'uniqid';

const school = {
  school: '',
  title: '',
  yearStart: 0,
  yearEnd: 0,
  desc: '',
  id: '',
};

const work = {
  company: '',
  title: '',
  yearStart: 0,
  yearEnd: 0,
  desc: '',
  id: '',
};

export const schoolObj = () => ({ ...school, id: uniqid() });

export const workObj = () => ({ ...work, id: uniqid() });

export const generalObj = {
  firstName: '',
  lastName: '',
  title: '',
  email: '',
  phone: '',
  desc: '',
};
