const User = {
  name: "sai",
  email: "saijami38@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({
  name: "2",
  isPaid: true,
});

function createCourse(price = 400): {
  name: string;
  price: number;
} {
  return {
    name: "reactjs",
    price: 399,
  };
}

// Type Aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUserNew(user: User): User {
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

// Read Only & Optional

type Vendor = {
  readonly _id: string; // readOnly
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number; // optional
};

let myVendor: Vendor = {
  _id: "1234",
  name: "Vendor1",
  email: "H@h.com",
  isActive: false,
};

myVendor.email = "G@g.com";
// myVendor._id = "21320";

// combine more type to single type
type CardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = CardNumber &
  cardDate & {
    cvv: number;
  };

export {};
