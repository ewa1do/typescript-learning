function interface_exercise() {
  interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
  }

  // * EXTENSION DE UNA INTERFAZ

  interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    intructions?: boolean;
  }

  // let myIceCream: IceCream = {
  //   flavor: 'Vanilla',
  //   scoops: 2,
  // };

  let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
  };

  console.log(myIceCream.flavor);

  // function toManyScoops(dessert: IceCream) {
  function toManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
    }

    return 'Your order will be ready soon!';
  }

  console.log(
    toManyScoops({ flavor: 'Chocolate', scoops: 5, sauce: 'caramel' })
  );
}

export default interface_exercise;
