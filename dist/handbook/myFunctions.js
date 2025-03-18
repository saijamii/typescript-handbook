"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return "hello"
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// function getValue(myVal: number) : boolean {
//   if (myVal > 5) return true;
//   return "200 OK"
// }
const getHello = (name) => {
    return "";
};
const heros = ["spiderman", "ironman", "thor"];
// const heros = [1, 2, 3];
heros.map((hero) => {
    return `hero is ${hero}`;
});
// Does not return anything
function consoleError(errorMessage) {
    console.error(errorMessage);
}
// Some functions never return a value
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
let loginUser = (name, email, isPaid = false) => { };
loginUser("sai", "8888@gmail.com");
signUpUser("sai", "8888", false);
getUpper("test");
addTwo(5);
