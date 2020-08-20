class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 27;

const holdString = new HoldAnything<string>();
holdString.data = '🍉';
