//Kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript

console.log(accum('ZpglnRxqenU')); //Z-Pp-Ggg-Llll.........

export function accum(s: string): string {
  const stringLength = s.length;
  let result = '';
  for (let i = 0; i < stringLength; i++) {
    const char = s[i];
    if (i + 1 === stringLength) {
      result += `${char.toUpperCase()}${char.toLowerCase().repeat(i)}`;
    } else {
      result += `${char.toUpperCase()}${char.toLowerCase().repeat(i)}-`;
    }
  }
  return result;
}
