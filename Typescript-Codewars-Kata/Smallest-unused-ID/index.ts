//Kata: https://www.codewars.com/kata/55eea63119278d571d00006a/train/typescript

console.log(nextId([0, 1, 2, 3, 5]));
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

export function nextId(ids: number[]): number {
  let i: number = 0;
  while (ids.includes(i)) {
    i++;
  }
  return i;
}
