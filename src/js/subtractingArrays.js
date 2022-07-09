export default function subtractingArrays(arr1, arr2) {
  return arr1.filter((x) => !arr2.some((y) => x.key === y.key));
}
