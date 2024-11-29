export default function bs_list(haystack: number[], needle: number): boolean {
  const haystackLength = haystack.length;
  if(!!!haystackLength) {
    return false;
  }
  let firstIndex = 0;
  let lastIndex = haystackLength;

  do {
    const medium = Math.floor((firstIndex + lastIndex) / 2)
    const value = haystack[medium];
    if(value === needle)
      return true;

    if(value > needle) {
      lastIndex = medium ;
    } else {
      firstIndex = medium + 1;
    }
  } while (firstIndex < lastIndex)
  return false;
}