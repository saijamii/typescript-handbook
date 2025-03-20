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
  // private _courseCount = 1; // private key accessible within class
  protected _courseCount = 1; // protected key can used in same class or Inhereted class
  readonly city: string = "";
  constructor(
    public email: string,
    public name: string,
    private userId?: string
  ) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count shold be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changesCourseCount() {
    this._courseCount = 4;
  }
}

const saijami = new User("s@gmail.com", "sj");
// saijami.name;
// saijami.deleteToken()
