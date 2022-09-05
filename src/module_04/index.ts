import Car from './01_clases';
import ElectricCar from './02_inheritance';

export function module_04() {
  const myCar1 = new Car('Cool Car Company', 'blue', 2);

  // console.log(myCar1._color);
  console.log(myCar1.color);

  const myCar2 = new Car('Galaxy Motors', 'red', 4);
  myCar2.doors = 2;
  console.log(myCar2);

  const myCar3 = new Car('Galaxy Motors', 'gray');
  console.log(myCar3);

  console.log(Car.getNumberOfCars());

  const tesla = new ElectricCar('Tesla Motors', 'black', 124, 2);
  const eCar = new ElectricCar('Electric Car Co.', 'silver', 263);

  console.log(eCar.doors);
  tesla.charge();
  console.log(tesla.brake());
}
