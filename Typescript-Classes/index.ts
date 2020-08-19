class Vehicle {
  constructor(public color: string) {}

  //   public drive(): void {
  //     console.log('🚗');
  //   }

  protected honk(): void {
    console.log('🚗');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  //Override drive()
  //   drive(): void {
  //     console.log('🏎️');
  //   }

  private drive(): void {
    console.log('🏎️');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
