interface User {
  readonly dbId?: number;
  email: string;
  id: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
} // re opening of the Interface

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sai: Admin = {
  role: "admin",
  email: "s@.com",
  id: 1,
  githubToken: "test",
  dbId: 20,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "sai10", off: 10) => {
    return 10;
  },
};

sai.email = "sai@gmail.com";
// sai.dbId = 33;

export {};
