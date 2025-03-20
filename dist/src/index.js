"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private _courseCount = 1; // private key accessible within class
        this._courseCount = 1; // protected key can used in same class or Inhereted class
        this.city = "";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count shold be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changesCourseCount() {
        this._courseCount = 4;
    }
}
const saijami = new User("s@gmail.com", "sj");
// saijami.name;
// saijami.deleteToken()
