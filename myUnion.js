"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var saijami = {
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
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3", 1, 2, 3];
var data4 = ["1", "2", "3", 1, 2, 3];
var seatAllotment;
seatAllotment = "window";
