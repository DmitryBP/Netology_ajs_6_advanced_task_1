export default function sortByAlph(obj) {
  const arrSortedByAlphabit = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arrSortedByAlphabit.push({ key, value: obj[key] });
      arrSortedByAlphabit.sort((a, b) => {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
      });
    }
  }
  return arrSortedByAlphabit;
}
