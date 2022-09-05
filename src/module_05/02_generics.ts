function generics_02() {
  interface Identity<T, U> {
    value: T;
    message: U;
  }

  let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!',
  };

  let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25,
  };

  interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
  }

  function processIdentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
  }

  let processor: ProcessIdentity<number, string> = processIdentity;

  let returnNumber1 = processor(100, 'Hello'); //🆗
  // let returnNumber2 = processor('Hello', 100); //❌
}

export default generics_02;
