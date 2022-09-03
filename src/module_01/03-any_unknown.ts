function any_and_unknown() {
  // * ANY && Unknown

  // ? The any type is the one type that can represent any JavaScript value with no constraints.

  let randomValue: any = 10;
  randomValue = 'Mateo'; //🆗
  randomValue = true; //🆗

  // ! Remember that all the convenience of any comes at the cost of losing type safety.
  // ! Type safety is one of the main motivations for using TypeScript.
  // ! You should avoid using any when it's not necessary.

  // * Unknown
  // ? The unknown type is similar to the any type in that any value is assignable to type unknown.
  // ? However, you can't access any properties of an unknown type, nor can you call or construct them.

  let randomValue2: unknown = 10;
  randomValue2 = true;
  randomValue2 = 'Mateo';

  // console.log(randomValue2.name); //❌

  // ! The core difference between any and unknown is you are unable to interact with a variable of type unknown;
  // ! doing so generates a compiler error

  // * Type Assertion

  // A type assertion tells TypeScript you have performed any special checks that you need before calling the statement

  if (typeof randomValue2 === 'string') {
    console.log((randomValue2 as string).toUpperCase());
  } else {
    console.error('A string was expected here');
  }

  //! Type guards

  //The previous example demonstrates the use of typeof in the if block to examine the type of an expression at runtime.
  // This is called a type guard.

  //   Type 	Predicate
  // string 	typeof s === "string"
  // number 	typeof n === "number"
  // boolean 	typeof b === "boolean"
  // undefined 	typeof undefined === "undefined"
  // function 	typeof f === "function"
  // array 	Array.isArray(a)
}

export default any_and_unknown;
