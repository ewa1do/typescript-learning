function params() {
  const addThreeNumbers = (x: number, y: number, z: number): number =>
    x + y + z;
  console.log(addThreeNumbers(10, 20, 30));

  const addThreeNumbers2 = (x: number, y: number, z?: number): number => {
    if (typeof z === 'undefined') {
      return x + y;
    }

    return x + y + z;
  };
  console.log(addThreeNumbers2(10, 20, 30));

  const substractThreeNumbers = (x: number, y: number, z = 100): number =>
    x - y - z;

  console.log(substractThreeNumbers(10, 20));
  console.log(substractThreeNumbers(10, 20, 15));
}

export default params;
