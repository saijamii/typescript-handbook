class User {
  email: string;
  name: string;
  readonly city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const saijami = new User("s@gmail.com", "sj");
// saijami.city = "vizag";
