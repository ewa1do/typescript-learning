import Car from './01_clases';

class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;

  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  // Accessors
  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }

  // Methods
  charge() {
    console.log(`${this.worker()} is charging.`);
  }

  // ! Overrides the brake method of the Car class
  brake(): string {
    return `${this.worker()} is breaking with the regenerative braking system.`;
  }
}

export default ElectricCar;
