export default function sortByData(obj, arrData) {
  const arrSortedByDate = [];

  for (let i = 0; i < arrData.length; i++) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (arrData[i] === key) {
          arrSortedByDate.push({ key, value: obj[key] });
        }
      }
    }
  }

  return arrSortedByDate;
}
