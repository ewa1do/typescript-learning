interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
  // Properties
  private static numberOfCars: number = 0;
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    if (doors % 2 !== 0) throw new Error('Doors must be an even number');
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car.numberOfCars++;
  }

  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return `The color of the car is ${this._color}`;
  }

  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if (doors % 2 !== 0) {
      throw new Error('Doors must be an even number');
    }
    this._doors = doors;
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH`;
  }

  brake(): string {
    return `${this.worker()} is braking with the standar brake system`;
  }

  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }

  // This function performs work for the other method functions
  protected worker(): string {
    return this._make;
  }

  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
}

export default Car;
