function function_definition() {
  type calculator = (x: number, y: number) => number;

  const addNumbers: calculator = (x: number, y: number): number => x + y;
  const substractNumbers: calculator = (x: number, y: number): number => x - y;

  console.log(addNumbers(1, 2));
  console.log(substractNumbers(1, 2));
}

export default function_definition;
