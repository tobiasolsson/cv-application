import uniqid from 'uniqid';

const school = {
  school: 'The Odin Project',
  title: 'Fullstack JavaScript',
  yearStart: 2019,
  yearEnd: 'Tilssvidare',
  desc: 'Et netus et malesuada fames ac turpis egestas integer. Tincidunt dui ut ornare lectus sit. Aliquet sagittis id consectetur purus ut faucibus.',
  id: '',
};

const work = {
  company: 'Webdev company',
  title: 'Front-end utvecklare',
  yearStart: 2015,
  yearEnd: 'Tilssvidare',
  desc: 'Est ante in nibh mauris cursus mattis molestie. Ultrices eros in cursus turpis massa tincidunt dui. Posuere morbi leo urna molestie at elementum eu facilisis sed. Amet volutpat consequat mauris nunc congue nisi vitae. ',
  id: '',
};

export const schoolObj = () => ({ ...school, id: uniqid() });

export const workObj = () => ({ ...work, id: uniqid() });

export const generalObj = {
  firstName: 'Nils',
  lastName: 'Nilsson',
  title: 'Front-end utvecklare',
  email: 'nils@nilsson.se',
  phone: '0701 23 45 67',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
