"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = 44;
score = "55";
let saijami = {
    name: "saijami",
    id: 555,
};
saijami = {
    userName: "sj",
    id: 111,
};
function getDbId(id) {
    console.log("Db id is", id);
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(20);
getDbId("2055");
// Arrays
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", "3", 1, 2, 3];
const data4 = ["1", "2", "3", 1, 2, 3];
let seatAllotment;
seatAllotment = "window";
