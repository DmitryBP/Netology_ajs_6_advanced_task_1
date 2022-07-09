import sortByAlph from './sortByAlph.js';
import sortByData from './sortByData.js';
import subtractingArrays from './subtractingArrays.js';

export default function orderByProps(obj, arrOrder) {
  const arrAlph = sortByAlph(obj);
  const arrData = sortByData(obj, arrOrder);
  const arrFiltred = subtractingArrays(arrAlph, arrData);
  const result = [...arrData, ...arrFiltred];
  return result;
}
