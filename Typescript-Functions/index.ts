const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(45);

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 4));

const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(subtract(5, 43));

function divide(a: number, b: number): number {
  return a / b;
}

console.log(divide(54, 32));

const multiply = function (a: number, b: number): number {
  return a * b;
};

console.log(multiply(34, 32));

const logger = (message: string): void => {
  //Void can return only null or undefined
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
