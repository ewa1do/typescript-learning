function primitive_types() {
  // * Boolean Type
  let flag: boolean;
  let yes = true;
  let no = false;

  // * Numbers and BigInteger
  let x: number;
  let y = 0;
  let z: number = 123.456;
  let big: bigint = 100n;

  // * String Type
  let s: string;
  let empty = '';
  let abc = 'abc';

  let firstName: string = 'Edu';
  let sentence: string = `My first name is ${firstName}. I am new to TypeScript`;

  console.log(sentence);
}

export default primitive_types;
