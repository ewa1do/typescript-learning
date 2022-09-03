// * UNIONS
// * A union type describes a value that can be one of several types.
// * This can be helpful when a value is not under your control
// ? (for example, values from a library, an API, or user input.)

function union_and_intersection() {
  let multipleType: number | boolean;

  multipleType = 20; //🆗
  multipleType = false; //🆗
  // multipleType = 'Twenty'; //❌

  function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
    }

    if (typeof x === 'string' && typeof y === 'string') {
      return x.concat(y);
    }

    throw new Error('Parameters must be numbers or strings');
  }

  console.log(add(1, 2)); //🆗
  console.log(add('one', 'two')); //🆗
  // console.log(add(1, 'two')); //❌

  // * INTERSECTIONS
  //An intersection type combines two or more types to create a new type that has all properties of the existing types.
  // This allows you to add together existing types to get a single type that has all the features you need.

  interface Employee {
    employeeID: number;
    age: number;
  }

  interface Manager {
    stockPlan: boolean;
  }

  type ManagementEmployee = Employee & Manager;

  let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
  };

  console.log(newManager);

  // ? Literal types
  //A literal is a more concrete subtype of a collective type. What this means is that "Hello World" is a string,
  // but a string is not "Hello World" inside the type system

  type testResult = 'pass' | 'fail' | 'incomplete';
  let myResult: testResult;

  myResult = 'incomplete'; //🆗
  myResult = 'pass'; //🆗
  // myResult = 'failure'; //❌

  console.log(myResult);

  type dice = 1 | 2 | 3 | 4 | 5 | 6;

  let diceRoll: dice;

  diceRoll = 1; //🆗
  diceRoll = 2; //🆗
  // diceRoll = 7; //❌
}

export default union_and_intersection;
