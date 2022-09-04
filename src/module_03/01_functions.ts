function functions_exercise() {
  function displayAlert(message: string) {
    alert('The message is ' + message);
  }
  // displayAlert('secret');

  function sum(input: Array<number>): number {
    let total: number = 0;

    for (let count = 0; count < input.length; count++) {
      if (isNaN(input[count])) {
        continue;
      }
      total += Number(input[count]);
    }

    return total;
  }

  console.log(sum([1, 'two', 3]));
}

export default functions_exercise;
