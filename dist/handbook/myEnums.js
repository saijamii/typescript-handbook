"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 23] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const mySeat = SeatChoice.WINDOW;
