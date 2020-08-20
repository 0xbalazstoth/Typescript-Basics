//Kata: https://www.codewars.com/kata/57a386117cb1f31890000039/train/typescript

console.log(parseF('1'));
console.log(parseF('asd'));

export function parseF(s: string): number {
  let float = parseFloat(s);
  return isNaN(float) ? null : float;
}
