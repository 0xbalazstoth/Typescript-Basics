const carMakers: string[] = ['ford', 'renault', 'aston martin']; //String array
const any = ['😀', 27, true, 'Hi!']; //Any array
const dates = [new Date(), new Date()]; //Date array
const cardsByMake: string[][] = [['focus', 'twingo', 'db9']]; //2d array

const car = carMakers[0];
const myCar = carMakers.pop();
carMakers.map((car: string): string => {
  return car;
});
