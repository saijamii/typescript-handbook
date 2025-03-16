"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "sai",
    email: "saijami38@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({
    name: "2",
    isPaid: true,
});
function createCourse(price) {
    if (price === void 0) { price = 400; }
    return {
        name: "reactjs",
        price: 399,
    };
}
function createUserNew(user) {
    return {
        name: "",
        email: "",
        isActive: false,
    };
}
createUserNew({
    name: "",
    email: "",
    isActive: false,
});
var myVendor = {
    _id: "1234",
    name: "Vendor1",
    email: "H@h.com",
    isActive: false,
};
myVendor.email = "G@g.com";
