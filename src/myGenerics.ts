const score: Array<number> = [];

const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("5");

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "B1",
  type: 5,
});

function getProductsDetails<T>(products: T[]): T {
  // data fetch
  const myIndex = 3;
  return products[myIndex];
}

const getMoreProductsDetails = <T>(products: T[]): T => {
  // data fetch
  const myIndex = 6;
  return products[myIndex];
};

interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  console.log({ valOne, valTwo });
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connection: "cc",
  userName: "user",
  password: "1212",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
