function addTwo(num: number): number {
  // return "hello"
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

// function getValue(myVal: number) : boolean {
//   if (myVal > 5) return true;
//   return "200 OK"
// }

const getHello = (name: string): string => {
  return "";
};

const heros = ["spiderman", "ironman", "thor"];

// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// Does not return anything
function consoleError(errorMessage: string): void {
  console.error(errorMessage);
}

// Some functions never return a value
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("sai", "8888@gmail.com");
signUpUser("sai", "8888", false);
getUpper("test");

addTwo(5);

export {};
