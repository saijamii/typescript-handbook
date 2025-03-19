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
  readonly city: string = "";
  constructor(
    public email: string,
    public name: string,
    private userId?: string
  ) {}
}

const saijami = new User("s@gmail.com", "sj");
// saijami.name;
