// const user: (string | number)[] = [1,"sj"];
const user: [string, number, boolean] = ["sj", 22, true];

let rgb: [number, number, number] = [255, 265, 221];

type User = [number, string];

const newUser: User = [112, "sj@gmail.com"];

newUser[1] = "gt.com";
// newUser[2] = 52
newUser.push("2");
newUser.push("5");
newUser.push(5);

export {}