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
var getHello = function (name) {
    return "";
};
var heros = ["spiderman", "ironman", "thor"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// Does not return anything
function consoleError(errorMessage) {
    console.error(errorMessage);
}
// Some functions never return a value
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("sai", "8888@gmail.com");
signUpUser("sai", "8888", false);
getUpper("test");
addTwo(5);
