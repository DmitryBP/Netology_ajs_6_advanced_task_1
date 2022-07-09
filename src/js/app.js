import orderByProps from './orderByProps.js';
import sortByAlph from './sortByAlph.js';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const arrOrder = ['name', 'level', 'defence'];

orderByProps(obj, arrOrder);

const arrObj = {
  name: 'vasia',
  age: 35,
};

console.log(sortByAlph(arrObj));
