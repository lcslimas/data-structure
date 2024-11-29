export default function linear_search(haystack: number[], needle: number): boolean {
  for (let index = 0; index < haystack.length; index++) {
    const element = haystack[index];
    if(element === needle) return true;
  }
  return false;
}