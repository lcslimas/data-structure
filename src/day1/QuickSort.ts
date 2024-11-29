export default function quick_sort(arr: number[]): void {
  arr = quickSort(arr);
}

const quickSort = (arr: number[]): number[] => {
  if(!arr || !arr.length) return [];
  if(arr.length === 1) return arr;
  const middleIndex = Math.max(arr.length/2)
  const middleElementValue = arr[middleIndex];

  const arrBefore = arr.filter(value => value < middleElementValue);
  const arrAfter = arr.filter(value => value > middleElementValue);

  return quickSort(arrBefore).concat(middleElementValue).concat(quickSort(arrAfter));
}