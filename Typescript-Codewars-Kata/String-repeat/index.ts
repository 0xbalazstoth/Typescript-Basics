//Kata: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript

console.log(repeatStr(5, 'asd'));

export function repeatStr(n: number, s: string): string {
  let str: string = '';
  for (let i: number = 0; i < n; i++) {
    str += s;
  }
  return str;
}
