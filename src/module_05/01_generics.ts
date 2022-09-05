function generics() {
  function getArray<T>(items: Array<T>): T[] {
    return new Array<T>().concat(items);
  }

  let numberArray = getArray<number>([1, 2, 4]);
  // numberArray.push('string'); //❌
  console.log(numberArray);
}

export default generics;
