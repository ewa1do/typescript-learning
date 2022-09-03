// * The object types are all class, interface, array, and literal types (anything that is not a primitive type.)
function collection_types() {
  // * ARRAYS
  // ? Arrays can be written in one of two ways. In the first,
  // ? you use the type of the elements followed by square brackets ([ ]) to denote an array of that element type:

  let list: number[] = [1, 2, 3];

  // ? The second way uses a generic Array type, using the syntax Array<type>:

  let list2: Array<number> = [1, 2, 3];

  // * TUPLES
  // Array that contains values of mixed types.
  // TypeScript provides the Tuple type. To declare a Tuple, use the syntax variableName: [type, type, ...]

  let person1: [string, number] = ['Marcia', 35]; //🆗
  // let person1: [string, number] = ['Marcia', 35, true];  //❌
  // let person1: [string, number] = [35, 'Marcia']; //❌
}

export default collection_types;
