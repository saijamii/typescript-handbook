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
