//Kata: https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript

console.log(hello('BoB'));
console.log(hello(''));
console.log(hello());

export function hello(name = ''): string {
  if (name.length != 0) {
    let n: string = name[0].toUpperCase();
    let r: string = name.substr(1, name.length - 1).toLowerCase();
    let formattedName: string = n + r;
    return `Hello, ${formattedName}!`;
  } else return 'Hello, World!';
}
