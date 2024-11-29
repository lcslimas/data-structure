export default function two_crystal_balls(breaks: boolean[]): number {

  const jmpSize = Math.floor(Math.sqrt(breaks.length));
  let i = jmpSize;
  for(; i <= breaks.length; i+=jmpSize) {
    if(breaks[i]){
      break;
    }
  }
  i -= jmpSize;
  for(let j = 0; j <= jmpSize && i < breaks.length; i++, j++){
    if(breaks[i]){
      return i;
    }
  }
  return -1
}