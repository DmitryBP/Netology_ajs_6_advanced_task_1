import sortByAlph from '../js/sortByAlph.js';

describe('orderByProps function', () => {
  test('it should sort arr by alphabit', () => {
    const arrObj = {
      name: 'vasia',
      age: 35,
    };

    const result = [{ key: 'age', value: 35 }, { key: 'name', value: 'vasia' }];

    expect(sortByAlph(arrObj)).toStrictEqual(result);
    // функция sortByAlph.js покрыта тестами не полностью
    // не понимаю как покрыть тестом стр. 9-10 в sortByAlph.js
    // ? expect(arrSortedByAlphabit.sort(2, 3)).toBe(-1);
  });
});
